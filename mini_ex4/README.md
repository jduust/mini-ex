# Mini Exercise 4
[![Screenshot](https://raw.githubusercontent.com/jduust/mini-ex/master/mini_ex4/screenshot.PNG)](https://rawgit.com/jduust/mini-ex/master/mini_ex4/index.html)

[Try it out here](https://rawgit.com/jduust/mini-ex/master/mini_ex4/index.html) - Requires access to your webcam and microphone

## The program
The idea behind this program is to visualize what will possibly be tracked in the future (if not already now) by Facebook, Google and other sites who runs off advertisement. By reading your face, it can tell what kind of ads you would prefer, and the microphone will determine whether or not you're alone or have company, deciding what ads it can show. 

This was inspired by the knowledge that Facebook listens to your phone when you don't use it, and if you have a conversation about being thirsty, it would show an ad for Coca Cola etc. when you opened the app. I find it somewhat disturbing that companies should have access to this information, and it could possibly be used maliciously if put into the wrong hands.

## What it actually does
It uses clmtracker to insert the text on the points of your face that I've specified myself, which is under the eye, on the nose and by your mouth. The Beautyscore is just me messing around a bit, the number is a rounded up number of the tracking score, which rates how clearly it can see your face, but not a beauty measure per say. 

The brightness bar adds a transparant rectangle if you adjust the slide, which lightens the image (although not that effectively). The microphone noise level will adjust the text to whatever noise the microphone picks up, and if it hears noise it concludes you're with other people, so not that accurate at all. 
