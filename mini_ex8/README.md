# Mini Exercise 8 - Earthquake Map
[![Screenshot](https://raw.githubusercontent.com/jduust/mini-ex/master/mini_ex8/screenshot.PNG)](https://rawgit.com/jduust/mini-ex/master/mini_ex8/index.html)

[Try it out here](https://rawgit.com/jduust/mini-ex/master/mini_ex8/index.html)

## The program
I made this program in collaboration with [Mads Dixen](https://github.com/madsdixen/). The program is a map of the world, on which earthquakes from the past week or so are projected. The earthquakes are projected with pulsating circles, to make it appear that they're moving. Depending on the size of the quake, they state/country name will be displayed next to them, so you have a more precise idea of where the epicenter is located. This sometimes resultsl in overlapping text, if there's a lot of big earthquakes in neighbouring countries or states. Furthermore, there's breaking news headlines being displayed that are fetched using the keyword earthquake. 

(From Mads Dixens Github so you don't have to read the same thing twice) *The program is using three different data sources that it relies on for the program to work. When the program is executed, it makes an API request to api.mapbox.com for the image (loadImage()) showing the world map with the wanted aspects. Then the earthquake data is requiered, that is taken from a URL from earthquake.usgs.gov containing a CSV file (can be opened with ms Excel and loaded with loadString()). To show the latest news on "Earthquakes", an other api request is made, now to newsapi.org with the query "earthquake", this responce is recieved in for of a JSON file (loadJSON()).*

*An interesting mistake we made, trying to get the latest news with the search word earthquake illuminated the problem considering API's, that one, in most instances cannot know how the data is gathered and what algorithm that have been used to get the data in the response. We requested the top news from the API, hoping to get the top news on earthquakes. But the response contained nothing or very little about earthquakes, leaving us with the thought that is might be because articles are choosen more by their popularity than their connection to the query. Instead we just did a general search, returning more accurate news.*

## Reflection
At first we (especially Mads) had this idea of using all kinds of different API's, and aimed very high. I liked the idea, but wanted to be realistic, so we settled on using 3 sets of data. Earthquakes, a map and news. We had a few problems, some got solved some didn't. The data set with the earthquakes displays countries with an apostrophe behind them, we tried to solve this using RITA, but you can't use RITA with a csv file unfortunately. We could convert the data manually, but that would ruin the idea of collecting live data. 

A big issue for us was how the data was delivered, and we had to convert and format a lot of the data from the earthquake file to match the map. As an example we had to convert geographic coordinates so the numbers could be used as x and y coordinates, which could then be plotted onto the map. A bit similar to how i converted decimals numbers from 0-1 and multiplied them with 100 when using a slider, to make the slider slide more smoothly in previous mini exercises. 

I really like how you can combine data into a greater unit, in our program showing a "heatmap" of earthquakes along with headlines, combining this neutral data from the earthquakes, and humanizing them using the headlines, that display the damage and horror these earthquakes can cause. It gives you a sympathetic perspective to an otherwise neutral heatmap. 

A question i would like to investigate further is if there's 2 api's that are related, and if you somehow could customize what data you request from one API, using data from another API, so you manipulate the api URL using a different API.
