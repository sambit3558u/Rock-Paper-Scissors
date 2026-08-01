# Rock Paper Scissors Game

Ye ek simple, responsive aur browser-based Rock Paper Scissors game hai jo HTML, CSS aur JavaScript se banaya gaya hai.

Is game me player computer ke against khelta hai. Player Rock, Paper ya Scissors me se ek option choose karta hai aur computer random option select karta hai.

---

## Features

* Player versus computer gameplay
* Rock, Paper aur Scissors options
* Random computer choice
* Player score system
* Computer score system
* Win, lose aur draw detection
* Selected option highlight
* Choice animation
* Restart Game button
* Responsive design
* Mobile-friendly interface

---

## Technologies Used

Is project me ye technologies use hui hain:

* HTML5
* CSS3
* JavaScript
* CSS Flexbox
* CSS animations
* Responsive Design

---

## Project Structure

```text
Rock Paper Scissors/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Files Details

### `index.html`

Is file me game ka basic structure banaya gaya hai.

Isme:

* Game heading
* Player score
* Computer score
* Rock button
* Paper button
* Scissors button
* Player choice display
* Computer choice display
* Result message
* Restart button

available hain.

### `style.css`

Is file me game ka complete design diya gaya hai.

Isme:

* Background design
* Main game card
* Score board
* Choice buttons
* Hover effects
* Selected button design
* Result message colors
* Animations
* Responsive mobile layout

available hain.

### `script.js`

Is file me game ka complete logic diya gaya hai.

Isme:

* Player choice read karna
* Computer ki random choice banana
* Player aur computer choice compare karna
* Winner decide karna
* Score update karna
* Result message show karna
* Selected button highlight karna
* Game restart karna

available hain.

---

## Game Rules

Rock Paper Scissors ke rules:

```text
Rock, Scissors ko harata hai.
Paper, Rock ko harata hai.
Scissors, Paper ko harata hai.
```

Agar player aur computer same option select karte hain, to round draw hota hai.

---

## Winning Conditions

### Rock vs Scissors

```text
Rock ✊ beats Scissors ✌️
```

Rock winner hota hai.

### Paper vs Rock

```text
Paper ✋ beats Rock ✊
```

Paper winner hota hai.

### Scissors vs Paper

```text
Scissors ✌️ beats Paper ✋
```

Scissors winner hota hai.

### Draw

```text
Rock vs Rock
Paper vs Paper
Scissors vs Scissors
```

Dono ki choice same hone par round draw hota hai.

---

## Game Kaise Khelein

1. Game ko browser me open karo.
2. Rock, Paper ya Scissors me se koi option select karo.
3. Computer automatically random option select karega.
4. Player aur computer ki choice screen par show hogi.
5. Winner ka message show hoga.
6. Jeetne wale player ka score increase hoga.
7. Naya round khelne ke liye dobara option select karo.
8. Score reset karne ke liye `Restart Game` button dabao.

---

## Score System

Player round jeetta hai to Player Score me `1` add hota hai.

Computer round jeetta hai to Computer Score me `1` add hota hai.

Draw hone par kisi ka score increase nahi hota.

Example:

```text
Player Score: 3
Computer Score: 2
```

---

## Computer Choice Logic

Computer ki choice randomly generate hoti hai.

Available choices:

```js
const choices = [
    "rock",
    "paper",
    "scissors"
];
```

Random index generate hota hai:

```js
const randomIndex =
    Math.floor(Math.random() * choices.length);
```

Us index ki choice computer ki choice ban jaati hai.

---

## Winner Logic

Player aur computer ki choices compare ki jaati hain.

Player ki winning conditions:

```js
rock beats scissors
paper beats rock
scissors beats paper
```

Agar dono choices same hain, to result draw hota hai.

Baaki conditions me computer winner hota hai.

---

## Result Colors

Game result ke hisab se message ka color change hota hai:

```text
Green  = Player Win
Red    = Computer Win
Orange = Draw
```

---

## Game Run Kaise Karein

Project folder open karo:

```bat
cd /d "D:\Visual Studio Code\Pratice\Games\Rock Paper Scissors"
```

Uske baad `index.html` file browser me open karo.

Visual Studio Code me Live Server use karne ke liye:

1. `index.html` file open karo.
2. File par right-click karo.
3. `Open with Live Server` select karo.

---

## GitHub Par README Push Kaise Karein

Main `Games` folder me jao:

```bat
cd /d "D:\Visual Studio Code\Pratice\Games"
```

README file ko Git me add karo:

```bat
git add "Rock Paper Scissors/README.md"
```

Commit banao:

```bat
git commit -m "Add Rock Paper Scissors README"
```

GitHub par push karo:

```bat
git push
```

---

## Game Ke Saare Changes Push Karna

HTML, CSS, JavaScript ya README me changes karne ke baad:

```bat
cd /d "D:\Visual Studio Code\Pratice\Games"

git add "Rock Paper Scissors"

git commit -m "Update Rock Paper Scissors game"

git push
```

---

## Git Status Check Karna

Current Git status check karne ke liye:

```bat
git status
```

Successful push ke baad output kuch aisa hoga:

```text
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

---

## GitHub Pages

GitHub Pages enable hone ke baad game ka URL is type ka ho sakta hai:

```text
https://sambit3558u.github.io/Games/Rock%20Paper%20Scissors/
```

Folder name me spaces ke karan URL me `%20` aata hai.

Better URL ke liye folder ka naam change kar sakte ho:

```text
rock-paper-scissors
```

Uske baad URL hoga:

```text
https://sambit3558u.github.io/Games/rock-paper-scissors/
```

---

## Future Improvements

Aage game me ye features add kiye ja sakte hain:

* Best of 3 mode
* Best of 5 mode
* Timer
* Sound effects
* Background music
* Player name input
* Match history
* Winning streak
* Difficulty levels
* Dark aur light mode

---

## Author

Created by Sambit

GitHub Profile:

```text
https://github.com/sambit3558u
```
