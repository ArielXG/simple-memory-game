## Light and Sound Memory Game

This project is a web-based sound and memory game. The game was very popular in the 80s and is essentially a simon says
memory game in which the page will give a pattern to the user and the user must emulate it. The game will have 8 steps
in each pattern which are randomly generated. The pattern will have steps added until 8 steps is reached at which the
player wins. The user is allowed three mistakes. After a mistake the user is told how many try's they have left with an
alert message. If they use all three try's they lose the game. The game gets progressively more difficult in that the delay
between each step in the patern decrease's as steps are added. My version of the game is intentionally offputting to make
the game more difficult. I found that adding lots of colors and dynamic images as well as strobing colors made it harder to
focus on the pattern itself. In the future I would consider making a countdown for each pattern guess but I decided to leave
it out for this because I found the game difficult enough with all the flashing colors and increase in speed. I would also
consider adding a leaderboard feature but to make it a useful one would require the keeping track of user accounts/passwords.
This would raise a need for a database (I would likely use SQL on an xampp server to do this). Lastly I think it would be
neat if the webpage was more dynamically involved with the try's, wrong guesses, game over, and game win statuses. For example
having a section above the button's to display the number of wrong guesses and possibly a section where GAME OVER or GAME WON
appears rather than an alert.

# Pre-work - _Light and Sound Memory Game_

**Light and Sound Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Ariel Xavier Garcia-Duarte**

Time spent: **3.5** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

- [ ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [ ] "Start" button toggles between "Start" and "Stop" when clicked.
- [ ] Game buttons each light up and play a sound when clicked.
- [ ] Computer plays back sequence of clues including sound and visual cue for each button
- [ ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [ ] User wins the game after guessing a complete pattern
- [ ] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [ ] More than 4 functional game buttons
- [ ] Playback speeds up on each turn
- [ ] Computer picks a different pattern each time the game is played
- [ ] Player only loses after 3 mistakes (instead of on the first mistake)

The following **additional** features are implemented:

- [ ] Uses gifs and images which are hard for the eye to focus on, resulting in a more difficult game.

## Video Walkthrough (GIF)

![](https://cdn.glitch.me/d14201af-4379-436c-b1c9-b622ea134c5d/WinGame.gif?v=1648707682047)
![](https://cdn.glitch.me/d14201af-4379-436c-b1c9-b622ea134c5d/LoseGame.gif?v=1648707754337)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   I used some notes from my old computer science classes. I have taken a two classes in Web Development
   at the University of Arizona so all of my knowledge on how to make the website came from those classes and
   the given requirements.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   The biggest challenge for me was the JavaScript. I have used HTML and CSS a lot recently for very simple webpages
   but it has been quite a while since I used JavaScript. After the project I feel confident in my ability to program in
   JavaScript because I toughed it out and went through my old notes to re-learn the syntax. This did not take too long
   because every time I learn a new language I use a small notebook and dedicate it to syntax for that langauge. i
   conveniently still had this notebook for JavaScript so it served as a quick reference for syntax and general rules.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   I have done a good amount of web development and I love doing it but I feel I still lack some backend knowledge. I
   would like to learn more about how servers interact with webpages and what servers are best to use. I have experience
   with Xampp servers in which I used SQL for a database but I would like to learn more about alternatives. It would be
   awesome to know more about what servers and databases are best for certain tasks or if it even makes a difference.
   I also would like to learn more about the best ways to style websites. I know how to write good HTML but I feel I am
   somewhat lacking in knowledge of what is appealing to users. I would like to learn more CSS.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   This is a really hard question because I absolutely love to code and in my opinion there is always more to add to code.
   For starters I would definitely make the UI look more appealing. I mentioned earlier that the UI is intentionally
   distracting to make the game more difficult but even so there is ways I would try to make it look more appealing.
   Firstly, I would add a game start page rather than a button. The start page would have an option for users to sign
   in or make an account so that a scoreboard could be created. There would be two options for the scoreboard, viewing
   ones own scoreboard and viewing the scoreboard for certain areas (maybe based on zip or country). I would also like
   to add a difficulty option which would allow the user to choose from different difficulties that each have their own
   respective scoreboards. I think adding a timer would also be really neat. I would ideally put the timer at the top of
   the page in a game bar that has other information such as how many tries are left (or alternatively how many mistakes
   are allowed) and what step the user is on. I could also see an interesting feature being a dynamic number of buttons.
   I would have this option in the starting page maybe in a settings dropdown. This is all I can think of off of the top
   of my head but with some more thought I believe there is endless possibilities with even a simple memory game like this.

## Interview Recording URL Link

[My 5-minute Interview Recording](https://arizona.zoom.us/rec/share/3cq1ghKWDnhedWpmio91x4ReR2Pta3k-HvzBiYMYuAw_3qPn5ZCHtynWg7UF-BZ-.u-PvglpzQQXldInO?startTime=1648758829000)

## License

    Copyright Ariel Xavier Garcia-Duarte

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
