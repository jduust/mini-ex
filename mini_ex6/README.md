# Mini Exercise 6
[![Screenshot](https://raw.githubusercontent.com/jduust/mini-ex/master/mini_ex6/screenshot.PNG)](https://rawgit.com/jduust/mini-ex/master/mini_ex6/index.html)

[Try it out here](https://rawgit.com/jduust/mini-ex/master/mini_ex6/index.html)

## The program
The program is 2 bundle of circles, one which is still, and another which moves for the first 10 seconds, and then "pulsates" for the last 8-9 seconds. You can adjust strokeweight, and size of the circle bundle, in order to experiment with results. The results you get are hypnotizing, and can also create seizures if you're prone to getting themn, so SEIZURE WARNING! in case you were wondering.  

## The process
So for this exercise, i wanted to generate multiple circles, each one larger than the previous until they reach a certain width, and then generate them again, but transform them in different ways to make a kind of hypnotizing effect when they move across the first. I was inspired by another example, which i have been unable to relocate, but it was linked to your mouse movement, which made the effects limited to how well you could move your mouse.

So what i wanted to do was create different animations, one which is trippy, and another that is pulsating, even though it's just 1 circle bundle moving/changing size on top of another. While making it i created 2 sliders in order to find the perfect size and stroke weight, but figurued i would leave them for you to try, to see what you prefer. It's also nice to be able to change them, since your results will vary, if you have different window sizes, so if you resize you can change the values to fit your size. 

First i have a for loop, which generates circles that gets 10 pixels bigger until it reaches a certain value that is fixed to the width and slider. I draw this loop function twice, one for a still circle, and the second one is for the animations. I then have some rules for the animations, for the first animation which translates the second circle bundle, it will move forward until it gets above a certain value, then move backwards and repeat. The second animation has a rule that it will scale until it's fully scaled, then return to 0 again.

I have fixed the animations to time. I could've also fixed them to hotkeys, or the mouse, but i have some kind of OCD, that wnat the circle to be perfect, so when it's fully scaled, it switches back to the first animation, and visa versa.

## Reflecting
Philip Galanter defined Generative art as the following:

*"Generative art refers to any art practice where the artist uses a system, such as a set of natural language rules, a computer program, a machine, or other procedural invention, which is set into motion with some degree of autonomy contributing to or resulting in a completed work of art."*

So i feel like the autonomy in my program is time. Time decides what rules to apply, and the end result is art. Defining art however is a whole other dimension, and not something i will try to do in this short readme, since everyone has different opinions about art. You could however say that art is subjective. 

Another interesting thing to discuss about this program is ownership. Cause who is the owner of my code. I wrote it yes, but I was inspired by another p5js project. And both projects (this and my inspiration) uses libraries that other people have written. And they wrote those libraries based on processing, and it goes on and on. 

It depends on how you see the different things. You could see the libraries as tools. If you build a house with a hammer you borrowed, you would still own the house, even though someone else made/owned the hammer. You could credit whoever borrowed you the hammer, but it doesn't take away your accomplishment. But in terms of inspiration, if you copied another persons house, then your accomplishment is merely building, not designing. But i think it's impossible not to be inspired by other works, even unconcious insipiration. 

I wouldn't take full ownership for this program, because i merely took a generative design and made it my own, with my own animations, rules and additions. Even though i wrote the entire code myself, i knew someone else had written similar code. I would look at this as building a house, that's shaped like another house, but with different materials. I own it, and have personalized it, but i don't own the core design.
