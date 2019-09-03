
#### CryptoSquare
#### _**by Suzi Rubino — September 3, 2019**_
<br>

## Description

Behavior — Plain English	Input	Output
1. program accepts user sentence and changes all characters to lowercase, removing punctuation:	Wait! Don’t stop the feeling! > wait dont stop the feeling
2. Program converts sentence to an array, removing white space:	wait dont stop the feeling	> waitdontstopthefeeling
3. Program creates an array out of this string:	waitdontstopthefeeling >	[“w”, ”a”, “i”, “t”, “d”, “o”, “n”, “t”, “s”, ”t”, “o”, “p”, “t”, “h”, “e”, “f”, “e”, “e”, “l”, “i”, “n”, “g”]
4. Program finds the square root of number of items in array (e.g. is step 2 example) and rounds up to the nearest full integer:	22  > 	5
5.  The program takes the first character in the stripped lower case array created in step 3, pushes it to a new array, then proceeds past however many characters are in the square root (rounded up) and pushes that character into a new array until all the characters are reordered. The new array reordered represents step 4's number as the number of columns from top to bottom and the number of rows:	[“w”, ”a”, “i”, “t”, “d”, “o”, “n”, “t”, “s”, ”t”, “o”, “p”, “t”, “h”, “e”, “f”, “e”, “e”, “l”, “i”, “n”, “g”]	> ["w", "o", "o", "f", "n", "a", "n", "p", "e", "g", "i", "t", "t", "e", "t", "s", "h", "l", "d", "t", "e", "i"]
6. The program joins the output array from step 5 to create a string:	["w", "o", "o", "f", "n", "a", "n", "p", "e", "g", "i", "t", "t", "e", "t", "s", "h", "l", "d", "t", "e", "i"] > woofapneaattestshldtei
7. The program inserts a white space every five characters:	woofapneaattestshldtei	> woof apnea attest shldt ei




<br>

## Objectives
- [x] JavaScript business logic and user interface logic are separate.
- [x] Variable names are descriptive and use lower camel case (e.g. myVariableExample).
- [x] Code is clean, well-refactored, and easy-to-read. This includes correct indendation, spacing, and including only necessary comments and debugging tools.
- [x] Application implements a for loop and works as expected.
All previous objectives have been met.
- [x] Project is broken down into "plain English" specs, listed in README.
- [x] Project is in a presentable, portfolio-quality state.
- [x] Practice styling with imagery

<br>

## Current Screenshot for Reference
<br>

![alt text](https://raw.githubusercontent.com/rerun1/factorial/master/img/screenShot8-20-19.png)
<br>
<br>

## Setup/Installation Requirements
* Clone this github repository
* Open index.html in a browser
<br>

## Known Bugs
No known bugs.
 <br>

## Support and Contact Details
Please contact Suzi Rubino at suzirubino@gmail.com or contribute your solution to code. Thank you!
<br>

## Technologies Used
1. html
2. CSS and Bootstrap
3. github
4. javascript and Jquery library

<br>

### License
MIT License

Copyright (c) 2019 Suzi Rubino

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
