# Mini Exercise 5
[![Screenshot](https://raw.githubusercontent.com/jduust/mini-ex/master/mini_ex5/screenshot.PNG)](https://rawgit.com/jduust/mini-ex/master/mini_ex5/index.html)

[Try it out here](https://rawgit.com/jduust/mini-ex/master/mini_ex5/index.html) - Use arrow keys up/down to play the game

## The program
For this mini exercise, i decided to reuse some old assets, that is sound recordings and images from my mini_ex2, and create an interactive game, not just a program that runs without you interacting with it. I wanted to try and make the game using the P5 play library. I quickly ran into some problems, which is that you can't use p5 class and objects to work with the p5 play library, you can however use groups and sprites. They work the same way, but now you can implement them with the p5 play library.  

The most annoying problem i had, was trying to use the keyIsDown command, for using the up and down arrow, but got it working using the p5play KeyDown command instead, which does the same. 

You control the guy (see mini_ex2 for context about the wolf and the guy) using up and down arrow keys, trying to avoid the wolves. Hitting a wolf will get you eaten, and end the game, so you have to start the game over again. The wolves are drawn every second, and by assigning them to a group, i can make an if rule if it collides, applying to all the wolves, so i only have to write one line of code, isntead of say 6 lines of codes (one for every wolf)

The basic characteristics of OOP is translating or describing something either from the real world or fantasy/movies/other programs. So what you do is you describe the characteristics of the object, say if it's a dog you describe the height, fur color, how it moves, how many legs it has etc.

I could connect my games to many things, but since it's so basic, i'll relate it to something that is better at illustrating my objects. If we look at the wolf, it's static, and that's because i wouldn't easily be able to give the wolf legs that move in an animation, by adding several animations, but that's not what this exercise was about. But games like GTA V and Skyrim have models of wolves. Here they studied the movements of wolves, certain behaviors and much more, in order to make them look and behave 'realistically'. They will show their teeth, hunch their back and raise their tail if they feel you're a threat, and their legs will bend both at the paw and the knee, making it walk just like a real wolf. The amount of details you have to assing to an object in a modern day video game is immense, and a huge task.


### Libraries
Complete p5 library, with the extension of p5.play
