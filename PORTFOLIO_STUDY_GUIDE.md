# Portfolio Study Guide
## Zero to Hero: Rebuild This Site From Scratch Without AI

> **Who this is for:** Complete beginners. No assumptions. If you can run a program in C, you have more than enough background to follow this guide. By the end, you should be able to recreate every file in this project from memory, understand every line of code, and deploy a new site on your own.

> **How to read this:** Top to bottom, in order. Each section builds on the last. Don't skip ahead — the concepts layer on each other.

---

## Table of Contents

**Part 1 — Foundation**
1. [How the Web Actually Works](#1-how-the-web-actually-works)
2. [Your Development Environment](#2-your-development-environment)
3. [The Terminal — Your Most Important Tool](#3-the-terminal--your-most-important-tool)
4. [HTML — The Structure of Every Webpage](#4-html--the-structure-of-every-webpage)
5. [CSS — Making Things Look Good](#5-css--making-things-look-good)

**Part 2 — JavaScript**
6. [JavaScript Fundamentals](#6-javascript-fundamentals)
7. [Modern JavaScript (ES6+)](#7-modern-javascript-es6)
8. [Async JavaScript](#8-async-javascript)

**Part 3 — TypeScript**
9. [Why TypeScript Exists](#9-why-typescript-exists)
10. [TypeScript in Practice](#10-typescript-in-practice)

**Part 4 — React**
11. [What React Is and Why It Exists](#11-what-react-is-and-why-it-exists)
12. [Components and JSX](#12-components-and-jsx)
13. [Props — Passing Data Between Components](#13-props--passing-data-between-components)
14. [State — Data That Changes](#14-state--data-that-changes)
15. [Hooks — useEffect and More](#15-hooks--useeffect-and-more)
16. [Lists, Keys, and Conditional Rendering](#16-lists-keys-and-conditional-rendering)

**Part 5 — The Stack**
17. [Next.js — React's Best Friend](#17-nextjs--reacts-best-friend)
18. [Tailwind CSS — Styling Without Leaving Your JSX](#18-tailwind-css--styling-without-leaving-your-jsx)
19. [shadcn/ui — Copy-Paste Components](#19-shadcnui--copy-paste-components)
20. [Framer Motion — Animations](#20-framer-motion--animations)
21. [Lucide React — Icons](#21-lucide-react--icons)

**Part 6 — Building the Portfolio**
22. [File Structure Explained, Line by Line](#22-file-structure-explained-line-by-line)
23. [How Data Flows Through the App](#23-how-data-flows-through-the-app)
24. [Every Component Explained](#24-every-component-explained)
25. [The UI Enhancements Explained](#25-the-ui-enhancements-explained)

**Part 7 — Shipping It**
26. [Git — Saving and Sharing Your Work](#26-git--saving-and-sharing-your-work)
27. [Deploying to Vercel](#27-deploying-to-vercel)
28. [How to Update Your Portfolio](#28-how-to-update-your-portfolio)

**Part 8 — When Things Break**
29. [Reading Error Messages](#29-reading-error-messages)
30. [Browser DevTools](#30-browser-devtools)
31. [Common Errors and Fixes](#31-common-errors-and-fixes)

**Part 9 — Reference**
32. [Complete Rebuild Checklist](#32-complete-rebuild-checklist)
33. [Glossary](#33-glossary)

---

# Part 1 — Foundation

## 1. How the Web Actually Works

Before you write a single line of code, understand what happens when someone visits a website.

### The Request-Response Cycle

```
You type "google.com" in your browser
          ↓
Browser asks DNS: "What's the IP address for google.com?"
          ↓
DNS says: "It's 142.250.80.46"
          ↓
Browser sends HTTP request to that IP: "GET / HTTP/1.1"
          ↓
Google's server responds with HTML, CSS, JavaScript files
          ↓
Browser downloads the files
          ↓
Browser reads the HTML, builds the DOM (the page structure)
          ↓
Browser applies CSS styles
          ↓
Browser runs JavaScript to add interactivity
          ↓
You see the page
```

### What Each File Type Does

| File Type | Role | Analogy |
|-----------|------|---------|
| **HTML** | Structure and content | The skeleton and organs |
| **CSS** | Visual styling | The skin, clothes, makeup |
| **JavaScript** | Behaviour and interactivity | The muscles and brain |

### What Your Portfolio Is

Your portfolio is a **static site**. That means:
- All the HTML, CSS, and JavaScript are generated once (when you build)
- When someone visits, they get pre-made files — no database, no server logic
- It loads extremely fast because there's nothing to "compute" on request

Next.js handles turning your React code into those static files.

---

## 2. Your Development Environment

### What You Need Installed

**Node.js** — JavaScript runtime. Lets you run JavaScript outside a browser (on your computer). npm (Node Package Manager) comes with it. Download from nodejs.org.

**A Code Editor** — VS Code is the industry standard. Download from code.visualstudio.com.

**Git** — Version control. Tracks every change you make. Download from git-scm.com.

### VS Code Essentials

After installing VS Code, install these extensions (search in the Extensions sidebar):

- **ESLint** — highlights code problems as you type
- **Prettier** — auto-formats your code on save
- **Tailwind CSS IntelliSense** — autocompletes Tailwind class names
- **TypeScript** — language support (usually pre-installed)

**Useful VS Code shortcuts:**
```
Ctrl + `        → Open integrated terminal
Ctrl + P        → Quick open file by name
Ctrl + Shift + P → Command palette (search for any action)
Ctrl + /        → Toggle comment
Alt + Click     → Multiple cursors
Ctrl + D        → Select next occurrence of selected text
Ctrl + B        → Toggle sidebar
```

### Verifying Your Install

Open a terminal and run:
```bash
node --version    # Should print something like v20.19.0
npm --version     # Should print something like 10.8.2
git --version     # Should print something like git version 2.43.0
```

If any of these fail, you need to install/reinstall that tool.

---

## 3. The Terminal — Your Most Important Tool

The terminal (also called command line, command prompt, shell, or console) is how you talk to your computer in text. As a web developer, you'll use it constantly.

### Opening a Terminal

- **Windows:** Search "Terminal" or press `Win + X` and pick "Terminal"
- **Mac:** `Cmd + Space`, type "Terminal"
- **VS Code:** `Ctrl + `` ` `` (backtick)

### Navigation Commands

```bash
# Print Working Directory — shows where you are
pwd
# Output: /Users/aly/projects

# List files in current directory
ls
# On Windows:
dir

# Change Directory — move to a folder
cd projects
cd "C:\Users\aly\Documents"     # Windows with spaces needs quotes
cd ..                            # Go up one folder
cd ~                             # Go to your home folder

# Create a new folder
mkdir my-project

# Create a new file
touch index.html                 # Mac/Linux
type nul > index.html            # Windows
```

### Understanding File Paths

```
C:\Users\alyan\Desktop\portfolio\app\page.tsx
         ↑              ↑         ↑   ↑
      username        folder  project file

# On Mac/Linux:
/Users/aly/Desktop/portfolio/app/page.tsx

# Relative path (from where you currently are):
app/page.tsx        → subfolder "app", then file "page.tsx"
../lib/data.ts      → go up one folder, then into "lib"
./components        → "components" folder in current directory (same as: components)
```

### npm Commands You'll Use

```bash
# Install all dependencies listed in package.json
npm install

# Run the development server (see your site live)
npm run dev

# Build for production
npm run build

# Install a new package
npm install framer-motion

# Install a package as dev-only (not needed in production)
npm install --save-dev typescript
```

---

## 4. HTML — The Structure of Every Webpage

HTML (HyperText Markup Language) describes what is on a page, not how it looks.

### Anatomy of an HTML Element

```html
<tagname attribute="value">Content goes here</tagname>
   ↑          ↑                    ↑                ↑
opening    optional           what's inside     closing
  tag       info               the element        tag
```

```html
<!-- Self-closing elements have no content and no closing tag -->
<img src="photo.jpg" alt="A description" />
<br />
<input type="text" placeholder="Type here..." />
```

### A Complete HTML Page

```html
<!DOCTYPE html>               <!-- Tell browser: this is HTML5 -->
<html lang="en">              <!-- Root element, lang = language -->
  <head>                      <!-- Metadata (not visible on page) -->
    <meta charset="UTF-8" />  <!-- Character encoding -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Portfolio</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>                      <!-- Everything visible on the page -->
    <header>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
      </nav>
    </header>

    <main>
      <section id="hero">
        <h1>Aly Anany</h1>
        <p>Computer Engineering Student</p>
      </section>

      <section id="about">
        <h2>About Me</h2>
        <p>I build things with code.</p>
      </section>
    </main>

    <footer>
      <p>© 2026 Aly Anany</p>
    </footer>

    <script src="app.js"></script>
  </body>
</html>
```

### The Most Important HTML Elements

**Headings — hierarchy matters for SEO and accessibility:**
```html
<h1>Page Title (only one per page)</h1>
<h2>Section heading</h2>
<h3>Subsection heading</h3>
<h4>Smaller subsection</h4>
```

**Text and content:**
```html
<p>A paragraph of text.</p>
<span>Inline text wrapper</span>
<strong>Bold text</strong>
<em>Italic text</em>
<br />         <!-- Line break -->
<hr />         <!-- Horizontal rule (divider line) -->
```

**Links:**
```html
<a href="https://google.com">External link</a>
<a href="#about">Jump to #about section on this page</a>
<a href="mailto:email@example.com">Email link</a>
<a href="/resume.pdf" target="_blank">Opens in new tab</a>
```

**Containers:**
```html
<div>Generic block container (takes full width)</div>
<span>Generic inline container</span>
<section>A thematic group of content</section>
<article>Self-contained content piece</article>
<header>Top of page or section</header>
<footer>Bottom of page or section</footer>
<nav>Navigation links</nav>
<main>Main content area</main>
<aside>Sidebar content</aside>
```

**Lists:**
```html
<ul>                  <!-- Unordered (bullets) -->
  <li>Item one</li>
  <li>Item two</li>
</ul>

<ol>                  <!-- Ordered (numbered) -->
  <li>First</li>
  <li>Second</li>
</ol>
```

**Images:**
```html
<img
  src="/photo.jpg"
  alt="Aly playing squash"    <!-- ALWAYS include alt text — accessibility -->
  width="400"
  height="300"
/>
```

---

## 5. CSS — Making Things Look Good

CSS (Cascading Style Sheets) controls how HTML elements look. Without CSS, every page looks like a plain text document.

### How CSS Works

```css
/* Selector   { Property: Value; } */
   h1         { color: blue;      }

/* Multiple properties: */
h1 {
  color: blue;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 16px;
}
```

### Three Ways to Select Elements

```css
/* 1. By tag name (affects ALL h1 elements) */
h1 { color: red; }

/* 2. By class name (reusable, multiple elements) */
.card { border: 1px solid gray; }

/* 3. By ID (unique, one element per page) */
#hero { background: black; }
```

In HTML:
```html
<h1>This is red</h1>
<div class="card">I have a border</div>
<section id="hero">I have a black background</section>
```

### The Box Model — Everything Is a Rectangle

Every element is a box with four layers:

```
┌─────────────────────────────────────────────────┐
│                    MARGIN                        │  ← Space outside the border
│  ┌───────────────────────────────────────────┐  │
│  │                  BORDER                   │  │  ← The visible edge
│  │  ┌─────────────────────────────────────┐  │  │
│  │  │               PADDING               │  │  │  ← Space between border and content
│  │  │  ┌───────────────────────────────┐  │  │  │
│  │  │  │           CONTENT             │  │  │  │  ← Text, image, etc.
│  │  │  └───────────────────────────────┘  │  │  │
│  │  └─────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
```

```css
.box {
  width: 200px;
  height: 100px;
  padding: 16px;           /* inside space */
  border: 2px solid blue;  /* the line */
  margin: 24px;            /* outside space */
}

/* Shorthand (top, right, bottom, left — clockwise from top): */
margin: 10px 20px 10px 20px;

/* Same value all sides: */
margin: 16px;

/* Top/bottom then left/right: */
padding: 8px 16px;
```

### Flexbox — The Layout System You'll Use Most

Flexbox is how you arrange elements in a row or column.

```css
.container {
  display: flex;              /* Enable flexbox */
  flex-direction: row;        /* or: column */
  justify-content: center;    /* Horizontal alignment (in row mode) */
  align-items: center;        /* Vertical alignment (in row mode) */
  gap: 16px;                  /* Space between children */
  flex-wrap: wrap;            /* Allow children to wrap to next line */
}
```

```
justify-content options:
  flex-start    |A B C          |
  center        |   A B C       |  (centered)
  flex-end      |          A B C|
  space-between |A      B      C|
  space-around  |  A     B    C |

align-items options (affects the OTHER axis):
  flex-start  → items at top (in row mode)
  center      → items vertically centered
  flex-end    → items at bottom
  stretch     → items stretch to fill height (default)
```

### CSS Grid — For 2D Layouts

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* 3 equal columns */
  grid-template-columns: 1fr 2fr;         /* 1:2 ratio */
  gap: 24px;
}
```

```
repeat(3, 1fr) creates:
┌──────┬──────┬──────┐
│ col1 │ col2 │ col3 │
└──────┴──────┴──────┘

1fr 2fr creates:
┌───────┬──────────────┐
│  1fr  │     2fr      │
└───────┴──────────────┘
```

### Responsive Design — Different Styles for Different Screens

```css
/* Default styles (mobile first) */
.container {
  width: 100%;
  font-size: 16px;
}

/* @media queries — apply at this screen width and above */
@media (min-width: 640px) {    /* Small: 640px+ (tablets) */
  .container { max-width: 640px; }
}

@media (min-width: 768px) {    /* Medium: 768px+ (small laptops) */
  .container { max-width: 768px; }
}

@media (min-width: 1024px) {   /* Large: 1024px+ (desktops) */
  .container {
    max-width: 1024px;
    font-size: 18px;
  }
}
```

### CSS Variables (Custom Properties)

```css
/* Define variables in :root (applies to whole page) */
:root {
  --primary-color: #3b82f6;
  --text-color: #1a1a1a;
  --spacing-lg: 32px;
}

/* Use variables with var() */
button {
  background-color: var(--primary-color);
  color: white;
  padding: var(--spacing-lg);
}

/* When you change the variable, everything using it updates */
.dark-mode {
  --primary-color: #60a5fa;   /* lighter blue for dark backgrounds */
  --text-color: #f5f5f5;
}
```

---

# Part 2 — JavaScript

## 6. JavaScript Fundamentals

JavaScript is what makes websites interactive. It runs in the browser.

### Variables

```javascript
// var — old, avoid (has scoping issues)
var name = "Aly";

// let — use when the value will change
let score = 0;
score = 10;      // OK

// const — use when the value won't change (prefer this)
const MAX_SCORE = 100;
// MAX_SCORE = 200;  // ERROR: can't reassign a const
```

### Data Types

```javascript
// String — text, in quotes
const name = "Aly Anany";
const greeting = 'Hello';
const template = `My name is ${name}`;   // template literal

// Number — integers and decimals (no distinction)
const age = 21;
const gpa = 3.8;

// Boolean — true or false
const isStudent = true;
const hasGraduated = false;

// null — intentionally empty
const nothing = null;

// undefined — declared but not assigned
let x;
console.log(x);   // undefined

// Array — ordered list
const skills = ["Python", "TypeScript", "Azure"];
skills[0]   // "Python" (zero-indexed)
skills[2]   // "Azure"

// Object — key-value pairs
const person = {
  name: "Aly",
  age: 21,
  isStudent: true,
};
person.name    // "Aly"
person["age"]  // 21
```

### Operators

```javascript
// Arithmetic
5 + 3    // 8
10 - 4   // 6
3 * 4    // 12
10 / 3   // 3.333...
10 % 3   // 1 (remainder)
2 ** 4   // 16 (exponentiation)

// Comparison (always use === not ==)
5 === 5     // true  (strict equality, checks type AND value)
5 == "5"    // true  (loose equality, only checks value — AVOID)
5 !== 6     // true  (strict not-equal)
5 > 3       // true
5 >= 5      // true

// Logical
true && false   // false (AND — both must be true)
true || false   // true  (OR — at least one must be true)
!true           // false (NOT — flips the boolean)
```

### Conditionals

```javascript
const gpa = 3.8;

if (gpa >= 3.5) {
  console.log("Dean's List!");
} else if (gpa >= 2.5) {
  console.log("Good standing");
} else {
  console.log("Academic probation");
}

// Ternary operator — shorthand for simple if/else
const status = gpa >= 3.5 ? "Excellent" : "Good";
//             ↑ condition  ↑ if true    ↑ if false
```

### Functions

```javascript
// Function declaration
function add(a, b) {
  return a + b;
}
add(3, 4)   // 7

// Function expression (assigned to a variable)
const multiply = function(a, b) {
  return a * b;
};

// Arrow function (modern, used everywhere in React)
const divide = (a, b) => {
  return a / b;
};

// Arrow function — short form (single expression, no braces needed)
const square = (n) => n * n;
const greet = name => `Hello, ${name}!`;   // single param, no parentheses needed

// Default parameters
const introduce = (name, role = "Student") => {
  return `${name} is a ${role}`;
};
introduce("Aly")              // "Aly is a Student"
introduce("Aly", "Engineer")  // "Aly is an Engineer"
```

### Arrays — The Methods You'll Use Most

```javascript
const scores = [85, 92, 78, 95, 88];

// .length
scores.length   // 5

// .push() — add to end
scores.push(100);   // [85, 92, 78, 95, 88, 100]

// .pop() — remove from end
scores.pop();       // removes 100

// .map() — transform each item, returns NEW array
const doubled = scores.map(score => score * 2);
// [170, 184, 156, 190, 176]
// IMPORTANT: .map() does NOT change the original array

// .filter() — keep items that pass a test, returns NEW array
const passing = scores.filter(score => score >= 80);
// [85, 92, 95, 88]

// .find() — get first item that passes a test
const firstHigh = scores.find(score => score > 90);
// 92

// .includes() — check if array has a value
scores.includes(78)   // true

// .indexOf() — get position of a value
scores.indexOf(78)    // 2

// .slice() — get a portion of the array (non-destructive)
scores.slice(1, 3)    // [92, 78]

// .join() — turn array into string
scores.join(", ")     // "85, 92, 78, 95, 88"

// .forEach() — run a function on each item (no return value)
scores.forEach(score => console.log(score));
```

### Objects in Depth

```javascript
const person = {
  name: "Aly",
  age: 21,
  skills: ["Python", "TypeScript"],
  address: {
    city: "Guelph",
    province: "ON"
  }
};

// Accessing nested data:
person.address.city       // "Guelph"
person.skills[0]          // "Python"

// Destructuring — extract properties into variables:
const { name, age } = person;
console.log(name)   // "Aly"

// Rename while destructuring:
const { name: fullName } = person;
console.log(fullName)   // "Aly"

// Default values while destructuring:
const { name, role = "Student" } = person;
console.log(role)   // "Student" (since person.role doesn't exist)

// Spread operator — copy an object
const updated = { ...person, age: 22 };
// { name: "Aly", age: 22, skills: [...], address: {...} }

// Object shorthand — when key name = variable name:
const city = "Guelph";
const province = "ON";
const location = { city, province };
// same as: { city: city, province: province }
```

---

## 7. Modern JavaScript (ES6+)

### Modules — import and export

JavaScript files can share code with each other using modules.

```javascript
// math.js — EXPORTING
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export default function multiply(a, b) {
  return a * b;
}
// Note: only ONE "default" export per file, many named exports

// app.js — IMPORTING
import multiply from "./math.js";          // default import (any name)
import { PI, add } from "./math.js";       // named imports (exact names)
import { add as sum } from "./math.js";    // rename on import
import * as math from "./math.js";         // import everything as an object
```

### Nullish Coalescing (`??`) and Optional Chaining (`?.`)

```javascript
// ?? — use right side if left is null or undefined
const name = user.name ?? "Anonymous";
// If user.name is null or undefined, use "Anonymous"
// If user.name is "" (empty string) or 0, STILL use "" or 0
// (Compare to ||, which would use "Anonymous" for "" and 0 too)

// ?. — safely access nested properties without crashing
const city = user?.address?.city;
// If user is null → returns undefined (doesn't crash)
// If user.address is null → returns undefined
// Otherwise returns the city

// Combine them:
const city = user?.address?.city ?? "Unknown";
```

### Ternary, Short-circuit, and Logical Assignment

```javascript
// Ternary: condition ? ifTrue : ifFalse
const label = isLoggedIn ? "Logout" : "Login";

// Short-circuit AND: if left is falsy, skip right
const element = isLoggedIn && <UserMenu />;
// If isLoggedIn is false, returns false (renders nothing in React)
// If isLoggedIn is true, returns <UserMenu />

// Short-circuit OR: use right side if left is falsy
const name = username || "Guest";
```

---

## 8. Async JavaScript

### The Problem: JavaScript Is Single-Threaded

JavaScript can only do one thing at a time. If you fetch data from the internet, you don't want to freeze the whole page while waiting. That's where async comes in.

### Callbacks (Old Way — Avoid)

```javascript
// The "callback hell" problem:
getData(function(result) {
  processData(result, function(processed) {
    saveData(processed, function(saved) {
      updateUI(saved, function() {
        // Deeply nested — hard to read and debug
      });
    });
  });
});
```

### Promises (Better)

```javascript
// A Promise represents a value that will exist in the future
const promise = fetch("https://api.example.com/data");

promise
  .then(response => response.json())    // runs when fetch succeeds
  .then(data => console.log(data))      // runs when JSON parsing succeeds
  .catch(error => console.error(error)) // runs if anything fails
  .finally(() => setLoading(false));    // always runs
```

### Async/Await (Modern — Use This)

```javascript
// async/await is "syntactic sugar" over Promises
// It makes async code look like synchronous code

async function fetchUserData() {
  try {
    const response = await fetch("https://api.example.com/user");
    // "await" pauses this function until the Promise resolves
    // JavaScript keeps running OTHER code while waiting

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch:", error);
  }
}

// Arrow function version:
const fetchUserData = async () => {
  const response = await fetch("https://api.example.com/user");
  const data = await response.json();
  return data;
};
```

---

# Part 3 — TypeScript

## 9. Why TypeScript Exists

JavaScript lets you do anything, including things that will crash your program. TypeScript adds types to catch those mistakes before your code runs.

```javascript
// JavaScript — no errors caught:
function add(a, b) { return a + b; }
add("5", 3)   // "53" (string concatenation!) — wrong but allowed

// TypeScript — catches the mistake:
function add(a: number, b: number): number { return a + b; }
add("5", 3)   // ERROR: Argument of type 'string' is not assignable to 'number'
```

TypeScript is **compiled** — it converts back to regular JavaScript that browsers can run. The types only exist during development.

---

## 10. TypeScript in Practice

### Basic Types

```typescript
// Primitives
const name: string = "Aly";
const age: number = 21;
const isStudent: boolean = true;

// Arrays
const skills: string[] = ["Python", "TypeScript"];
const scores: number[] = [95, 87, 92];

// Tuple (fixed-length array with specific types)
const pair: [string, number] = ["GPA", 3.8];

// any — disables type checking (avoid if possible)
let anything: any = "hello";
anything = 42;   // OK, but you lose all TypeScript benefits
```

### Type Inference — TypeScript Guesses the Type

```typescript
// You don't always need to annotate — TypeScript figures it out:
const name = "Aly";          // TypeScript knows: string
const scores = [95, 87, 92]; // TypeScript knows: number[]
const double = (n: number) => n * 2;  // return type inferred: number
```

### Interfaces and Type Aliases

Both define the shape of an object. Use whichever you prefer (types are more flexible).

```typescript
// type alias
type Experience = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  tags: string[];
};

// interface (can be extended/merged)
interface Project {
  id: number;
  name: string;
  description: string;
  tags: string[];
  liveUrl?: string;   // "?" = optional property
}

// Using a type:
const job: Experience = {
  company: "Extrada Tech",
  role: "Software Consultant",
  period: "Jan 2026 – Sept 2026",
  bullets: ["Built ETL pipelines"],
  tags: ["Azure", "PySpark"],
};
```

### Union Types

```typescript
// A value can be one of several types:
type ButtonVariant = "default" | "secondary" | "outline" | "ghost";
let variant: ButtonVariant = "default";   // OK
let variant: ButtonVariant = "danger";    // ERROR — not in the union

// Union with different types:
type ID = string | number;
let userId: ID = "abc123";   // OK
let userId: ID = 123;         // Also OK
```

### Generics — Types That Work With Any Type

```typescript
// Without generics — only works with strings:
function firstItem(arr: string[]): string {
  return arr[0];
}

// With generics — works with any array type:
function firstItem<T>(arr: T[]): T {
  return arr[0];
}

firstItem(["a", "b", "c"])  // returns string
firstItem([1, 2, 3])        // returns number
firstItem([true, false])    // returns boolean
// TypeScript figures out T from the argument you pass
```

### React-Specific TypeScript

```typescript
// Component props type:
type NavbarProps = {
  links: { label: string; href: string }[];
  showResume?: boolean;   // optional
};

// Typing a component:
function Navbar({ links, showResume = true }: NavbarProps) {
  return <nav>...</nav>;
}

// Event handler types:
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
};

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};

// useState with explicit type:
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<{ name: string } | null>(null);
```

---

# Part 4 — React

## 11. What React Is and Why It Exists

### The Problem React Solves

Before React, updating a webpage looked like this:
```javascript
// Find element in DOM
const el = document.getElementById("username");
// Change it
el.textContent = "Aly";
// Find another
const counter = document.querySelector(".counter");
counter.textContent = count + 1;
```

As apps get complex, managing thousands of DOM updates becomes a nightmare. You lose track of what's in sync, what changed, what to re-render.

**React's solution:** Describe what the UI *should look like* for any given state, and let React figure out how to update the DOM efficiently.

```jsx
// You say: "when the count is 5, show this"
function Counter() {
  return <div>Count: {count}</div>;
}
// React figures out what actually changed and updates only that
```

### The Virtual DOM

React keeps a "virtual DOM" — a JavaScript copy of the real DOM. When state changes:
1. React creates a new virtual DOM
2. Compares it to the previous one (called "diffing")
3. Only updates the real DOM where things actually changed
4. This is called "reconciliation"

This is much faster than re-rendering the whole page every time.

---

## 12. Components and JSX

### What Is a Component?

A component is a **JavaScript function that returns JSX** (HTML-like code). It represents a piece of your UI.

```jsx
// The simplest possible component:
function Hello() {
  return <h1>Hello, world!</h1>;
}

// Use it like an HTML element:
function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <Hello />
    </div>
  );
}
```

### JSX Rules

```jsx
// 1. Must return ONE root element
// WRONG:
return (
  <h1>Title</h1>
  <p>Text</p>
);

// RIGHT — wrap in a div:
return (
  <div>
    <h1>Title</h1>
    <p>Text</p>
  </div>
);

// RIGHT — use a Fragment (renders nothing extra in HTML):
return (
  <>
    <h1>Title</h1>
    <p>Text</p>
  </>
);

// 2. Use className, not class
// WRONG: <div class="card">
// RIGHT:
<div className="card">text</div>

// 3. Embed JavaScript with {}
const name = "Aly";
return <h1>Hello, {name}!</h1>;              // Hello, Aly!
return <h1>2 + 2 = {2 + 2}</h1>;           // 2 + 2 = 4
return <p>{isLoggedIn ? "Hi!" : "Login"}</p>; // conditional

// 4. Self-close empty elements
// WRONG: <img src="photo.jpg"></img>
// RIGHT:
<img src="photo.jpg" alt="photo" />
<br />
<input type="text" />

// 5. Styles are objects
// WRONG: <div style="color: red;">
// RIGHT:
<div style={{ color: "red", fontSize: "16px" }}>text</div>
//           ↑ outer {} = embed JS, inner {} = JS object

// 6. Comments
return (
  <div>
    {/* This is a JSX comment */}
    <p>Content</p>
  </div>
);
```

---

## 13. Props — Passing Data Between Components

Props (properties) let you pass data **from a parent component into a child component**, like function arguments.

```jsx
// Child component — receives props as its first argument
function ExperienceCard({ company, role, period, bullets }) {
  return (
    <div className="card">
      <h3>{role}</h3>
      <p className="company">{company}</p>
      <p className="period">{period}</p>
      <ul>
        {bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}

// Parent component — passes data via props (looks like HTML attributes)
function Experience() {
  return (
    <div>
      <ExperienceCard
        company="Extrada Tech"
        role="Software Consultant"
        period="Jan 2026 – Sept 2026"
        bullets={["Built ETL pipelines", "Deployed AI assistant"]}
      />
      <ExperienceCard
        company="Robotics Institute"
        role="Computer Vision Engineer"
        period="May 2025 – Sept 2025"
        bullets={["Built vision system", "Engineered real-to-sim pipeline"]}
      />
    </div>
  );
}
```

### Props Rules

```jsx
// Props flow ONE WAY: parent → child. Never child → parent.

// Children — special prop for content between tags:
function Card({ children, className }) {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  );
}

// Usage:
<Card className="featured">
  <h3>ProxyCoach AI</h3>
  <p>AI fitness coaching platform</p>
</Card>
```

---

## 14. State — Data That Changes

**Props** = data passed in from outside (read-only)
**State** = data managed inside a component (can change)

When state changes, React automatically re-renders the component.

### useState

```jsx
import { useState } from "react";

function Counter() {
  // Syntax: const [value, setter] = useState(initialValue);
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>

      {/* Call the setter to change state */}
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      {/* Functional update — safer when new value depends on old: */}
      <button onClick={() => setCount(prev => prev + 1)}>
        Safe Increment
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}
```

### State With Objects and Arrays

```jsx
// State with an object:
const [user, setUser] = useState({ name: "Aly", score: 0 });

// WRONG — mutating state directly:
user.score = 10;   // React won't re-render!

// RIGHT — create a new object with spread:
setUser({ ...user, score: 10 });

// State with an array:
const [items, setItems] = useState(["first"]);

// Add item:
setItems([...items, "second"]);

// Remove item:
setItems(items.filter(item => item !== "first"));

// Update item:
setItems(items.map(item => item === "first" ? "FIRST" : item));
```

### State for Your Portfolio's Navbar

```jsx
// In navbar.tsx:
const [scrolled, setScrolled] = useState(false);
// When false: transparent navbar
// When true: frosted glass navbar with shadow

const [menuOpen, setMenuOpen] = useState(false);
// When false: hamburger icon, no dropdown
// When true: X icon, dropdown visible
```

---

## 15. Hooks — useEffect and More

### useEffect — Running Code at Specific Times

`useEffect` lets you run code that has "side effects" — things that aren't just rendering. Examples: listening to events, fetching data, setting timers.

```jsx
import { useEffect } from "react";

function Component() {
  useEffect(() => {
    // This runs AFTER the component renders
    console.log("Component rendered!");
  }); // No dependency array — runs after EVERY render (usually bad)

  useEffect(() => {
    // Empty dependency array [] = run ONCE after first render
    console.log("Component mounted!");
    document.title = "My Portfolio";
  }, []); // ← the dependency array

  const [count, setCount] = useState(0);
  useEffect(() => {
    // Runs after first render AND whenever count changes
    document.title = `Count: ${count}`;
  }, [count]); // ← [count] = run when count changes

  useEffect(() => {
    // The function returned is the CLEANUP function
    // It runs before the component is removed from the DOM
    const handler = () => console.log("scrolled");
    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
      // Without this cleanup, the listener stays forever (memory leak)
    };
  }, []);
}
```

### How useEffect Powers Your Navbar

```jsx
// The scroll listener in navbar.tsx:
useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 20);
  // "passive: true" = performance hint (we won't call preventDefault)
  window.addEventListener("scroll", onScroll, { passive: true });

  return () => window.removeEventListener("scroll", onScroll);
  // Cleanup: when navbar unmounts, remove the listener
}, []); // [] = set up once when navbar first appears
```

### The IntersectionObserver (Used in Your Navbar for Active Links)

IntersectionObserver watches elements and fires a callback when they enter or leave the viewport.

```jsx
useEffect(() => {
  const ids = ["about", "experience", "projects", "skills", "education", "contact"];

  const observers = ids.map(id => {
    const el = document.getElementById(id);  // get the section element
    if (!el) return null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // entry.isIntersecting = true when the element is visible
        if (entry.isIntersecting) setActiveSection(id);
      },
      { threshold: 0.35 }  // fire when 35% of the element is visible
    );

    observer.observe(el);  // start watching
    return observer;
  });

  return () => observers.forEach(o => o?.disconnect());  // stop watching
}, []);
```

---

## 16. Lists, Keys, and Conditional Rendering

### Rendering Lists with .map()

```jsx
const skills = ["Python", "TypeScript", "Azure"];

function SkillList() {
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
        //  ↑
        // ALWAYS provide a unique "key" prop
        // React uses this to track which items changed
        // Best: use a unique ID from your data
        // OK: use the item value if you know it's unique
        // BAD: use the array index (causes bugs with reordering)
      ))}
    </ul>
  );
}
```

### Conditional Rendering

```jsx
// Method 1: if statement (before return)
function Component({ isLoggedIn }) {
  if (!isLoggedIn) {
    return <p>Please log in.</p>;
  }
  return <p>Welcome back!</p>;
}

// Method 2: ternary in JSX
function Component({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <UserMenu /> : <LoginButton />}
    </div>
  );
}

// Method 3: short-circuit (show/hide)
function Component({ showBadge }) {
  return (
    <div>
      <h1>Title</h1>
      {showBadge && <span className="badge">New</span>}
      {/* If showBadge is false, nothing renders */}
    </div>
  );
}
```

---

# Part 5 — The Stack

## 17. Next.js — React's Best Friend

### What Next.js Adds

React is just a UI library — it doesn't know about routing, how to structure files, or how to optimise for production. Next.js is an **opinionated framework** built on top of React that handles all of that.

| Feature | React (alone) | Next.js |
|---------|--------------|---------|
| Routing | Need React Router | File-based, automatic |
| Performance | Manual setup | Automatic image/font/code optimisation |
| SEO | Poor (client-only) | Excellent (server rendering) |
| Static sites | Need Gatsby or Vite | Built-in |
| Deployment | Need extra config | Zero-config on Vercel |

### File-Based Routing

The `app/` folder structure **IS** your URL structure:

```
app/
├── page.tsx          → yourdomain.com/
├── about/
│   └── page.tsx      → yourdomain.com/about
├── blog/
│   ├── page.tsx      → yourdomain.com/blog
│   └── [slug]/
│       └── page.tsx  → yourdomain.com/blog/any-post-name
└── api/
    └── contact/
        └── route.ts  → yourdomain.com/api/contact (API endpoint)
```

### Special Files

```
layout.tsx    → Wrapper that applies to this folder and all children
page.tsx      → The actual page content
loading.tsx   → Shown while page is loading
error.tsx     → Shown if page throws an error
not-found.tsx → Shown for 404
```

### Server Components vs Client Components

**Server Components** (default — no directive needed):
- Run on the server at build time
- Can be `async` — await database calls, API fetches
- Cannot use browser APIs (`window`, `document`, `localStorage`)
- Cannot use React hooks (`useState`, `useEffect`)
- Smaller JavaScript bundle (code stays on server)

**Client Components** (`"use client"` at top of file):
- Run in the browser
- Can use all hooks, browser APIs, event listeners
- Can be interactive

```tsx
// Server Component — runs at build time, not in browser
// app/page.tsx
export default function HomePage() {
  // ✓ Can be async
  // ✓ Can import server-only code
  // ✗ Cannot use useState, useEffect
  return (
    <main>
      <Hero />
      <About />
    </main>
  );
}

// Client Component — runs in browser
// components/navbar.tsx
"use client";  // ← MUST be the very first line
import { useState, useEffect } from "react";

export default function Navbar() {
  // ✓ Can use hooks
  // ✓ Can use window, document
  // ✗ Cannot be async
  const [scrolled, setScrolled] = useState(false);
  return <header>...</header>;
}
```

**The rule:** Make everything a Server Component by default. Add `"use client"` only when you need interactivity.

### Metadata — SEO and Social Preview

```tsx
// In layout.tsx or page.tsx:
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aly Anany — Computer Engineering",
  description: "Portfolio of Aly Anany...",
  // Open Graph — controls how your site looks when shared on Twitter/LinkedIn:
  openGraph: {
    title: "Aly Anany",
    description: "Computer Engineering student...",
    images: ["/og-image.jpg"],    // preview image
    type: "website",
  },
};
```

### next.config.ts

```typescript
// Controls advanced Next.js settings
import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),   // Fix for workspace root detection
  },
};

export default nextConfig;
```

---

## 18. Tailwind CSS — Styling Without Leaving Your JSX

### The Core Idea

Instead of writing:
```css
/* styles.css */
.hero-title {
  font-size: 48px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 16px;
  text-align: center;
}
```
```html
<h1 class="hero-title">Aly Anany</h1>
```

You write:
```html
<h1 class="text-5xl font-bold text-foreground mb-4 text-center">Aly Anany</h1>
```

All the styling is right there in the HTML. No context-switching between files.

### The Spacing Scale

Tailwind uses a consistent spacing scale. The number multiplied by 4 = pixels:

```
p-0    → 0px
p-1    → 4px
p-2    → 8px
p-3    → 12px
p-4    → 16px
p-5    → 20px
p-6    → 24px
p-8    → 32px
p-10   → 40px
p-12   → 48px
p-16   → 64px
p-20   → 80px
p-24   → 96px
```

### The Complete Tailwind Cheatsheet

**Spacing (padding and margin):**
```
p-4      → padding: 16px all sides
px-4     → padding-left + right: 16px
py-4     → padding-top + bottom: 16px
pt-4     → padding-top: 16px
pr-4     → padding-right
pb-4     → padding-bottom
pl-4     → padding-left

m-4      → margin: 16px all sides
mx-auto  → margin-left + right: auto (centers block elements)
mt-8     → margin-top: 32px
-mt-2    → negative margin-top (pulls element up)

gap-4    → gap between flex/grid children: 16px
space-x-4 → margin-right on all children except last
space-y-4 → margin-bottom on all children except last
```

**Typography:**
```
text-xs     → 12px
text-sm     → 14px
text-base   → 16px (default)
text-lg     → 18px
text-xl     → 20px
text-2xl    → 24px
text-3xl    → 30px
text-4xl    → 36px
text-5xl    → 48px
text-6xl    → 60px
text-7xl    → 72px

font-thin       → font-weight: 100
font-light      → 300
font-normal     → 400
font-medium     → 500
font-semibold   → 600
font-bold       → 700
font-extrabold  → 800
font-black      → 900

italic          → font-style: italic
not-italic      → font-style: normal

text-left       → text-align: left
text-center     → center
text-right      → right
text-justify    → justified

leading-none    → line-height: 1
leading-tight   → 1.25
leading-snug    → 1.375
leading-normal  → 1.5
leading-relaxed → 1.625
leading-loose   → 2

tracking-tight  → letter-spacing: -0.05em
tracking-normal → 0
tracking-wide   → 0.025em
tracking-wider  → 0.05em
tracking-widest → 0.1em

uppercase       → text-transform: uppercase
lowercase       → lowercase
capitalize      → capitalize

truncate        → overflow: hidden + ellipsis (single line)
line-clamp-2    → limit to 2 lines with ellipsis
whitespace-nowrap → prevent line wrap
```

**Colors:**
```
text-foreground         → theme foreground (adapts to dark/light)
text-muted-foreground   → muted/gray text
text-primary            → your accent color (blue in your theme)
text-white
text-black
text-blue-500
text-blue-600
text-emerald-500
text-amber-500

bg-background          → theme background
bg-card                → card background
bg-primary             → accent color background
bg-muted               → subtle gray background
bg-blue-500/10         → blue at 10% opacity
bg-gradient-to-r from-blue-600 to-cyan-500  → gradient

border-border          → theme border color
border-primary/30      → accent at 30% opacity
```

**Sizing:**
```
w-full   → width: 100%
w-auto   → width: auto
w-4      → width: 16px
w-1/2    → width: 50%
w-1/3    → width: 33.333%
w-screen → width: 100vw (viewport width)
max-w-xl    → max-width: 576px
max-w-2xl   → 672px
max-w-4xl   → 896px
max-w-5xl   → 1024px
max-w-6xl   → 1152px

h-full   → height: 100%
h-screen → height: 100vh (full viewport height)
min-h-screen → min-height: 100vh

size-4   → width + height: 16px (shorthand)
```

**Display and Flexbox:**
```
hidden      → display: none
block       → display: block
inline      → display: inline
inline-block → display: inline-block
flex        → display: flex
inline-flex → display: inline-flex
grid        → display: grid
inline-grid → display: inline-grid

flex-row    → flex-direction: row (default)
flex-col    → flex-direction: column
flex-wrap   → flex-wrap: wrap
flex-nowrap → flex-wrap: nowrap

justify-start   → justify-content: flex-start
justify-center  → center
justify-end     → flex-end
justify-between → space-between
justify-around  → space-around

items-start   → align-items: flex-start
items-center  → center
items-end     → flex-end
items-stretch → stretch (default)

flex-1      → flex: 1 (take up remaining space)
flex-none   → flex: none (don't grow or shrink)
flex-shrink-0 → prevent shrinking
grow        → flex-grow: 1
```

**Grid:**
```
grid-cols-1         → 1 column
grid-cols-2         → 2 equal columns
grid-cols-3         → 3 equal columns
grid-cols-4         → 4 equal columns
grid-cols-12        → 12 columns (useful for complex layouts)
col-span-2          → span 2 columns
col-span-full       → span all columns
```

**Borders and Rounding:**
```
border              → 1px solid (uses --border color)
border-2            → 2px solid
border-t            → top border only
border-b            → bottom border only
border-border       → uses theme border color
border-primary      → uses primary color

rounded             → 4px border-radius
rounded-md          → 6px
rounded-lg          → 8px
rounded-xl          → 12px
rounded-2xl         → 16px
rounded-3xl         → 24px
rounded-full        → 9999px (circle/pill)
```

**Positioning:**
```
static     → position: static (default)
relative   → position: relative (children can be absolute relative to this)
absolute   → position: absolute (taken out of flow)
fixed      → position: fixed (stays on screen when scrolling)
sticky     → position: sticky (stays when you scroll past it)

top-0      → top: 0
right-0    → right: 0
bottom-4   → bottom: 16px
left-1/2   → left: 50%
inset-0    → top/right/bottom/left: 0 (fills parent)
-translate-x-1/2 → transform: translateX(-50%)

z-10       → z-index: 10
z-50       → z-index: 50
z-[100]    → z-index: 100 (arbitrary value)
```

**Effects:**
```
shadow         → box-shadow: small
shadow-md      → medium shadow
shadow-lg      → large shadow
shadow-xl      → extra large
shadow-none    → no shadow

opacity-0      → opacity: 0 (invisible)
opacity-50     → 50% opaque
opacity-100    → fully visible

blur-sm        → blur(4px)
blur-md        → blur(12px)
blur-3xl       → blur(64px) (used for background blobs)

backdrop-blur-md → blur the background behind the element

overflow-hidden  → clip content that overflows
overflow-auto    → scroll when content overflows

transition-all     → transition: all 0.15s
transition-colors  → transition only color properties
duration-300       → transition-duration: 300ms
ease-in-out        → transition timing function
```

**Hover, Focus, and Dark Mode:**
```
hover:bg-primary       → background changes on hover
hover:text-primary     → text color changes on hover
hover:border-primary   → border color changes on hover
hover:shadow-md        → shadow appears on hover

focus:outline-none     → remove focus outline
focus:ring-2           → add focus ring
focus-visible:ring-2   → ring only for keyboard focus

dark:bg-gray-900       → different background in dark mode
dark:text-white        → different text in dark mode
```

**Responsive Prefixes:**
```
sm:   → 640px and wider
md:   → 768px and wider
lg:   → 1024px and wider
xl:   → 1280px and wider
2xl:  → 1536px and wider

Examples:
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
hidden md:flex       → hide on mobile, flex on tablet+
text-2xl sm:text-4xl → smaller on mobile, bigger on tablet+
```

**Arbitrary Values (when the scale doesn't fit):**
```
w-[347px]           → width: 347px (any value in brackets)
text-[13px]         → font-size: 13px
bg-[#3b82f6]        → specific hex color
top-[-5px]          → negative value
left-[-3px]
z-[100]
```

---

## 19. shadcn/ui — Copy-Paste Components

### What Makes shadcn/ui Different

Most component libraries (like Material UI or Chakra UI) are npm packages — you install them and import components. You can't change their source code.

shadcn/ui works differently: when you add a component with `npx shadcn@latest add button`, it **copies the component code into your project** at `components/ui/button.tsx`. You own the code. You can edit every pixel.

### How It Works Technically

shadcn/ui in your project uses `@base-ui/react` as the underlying accessible primitive layer (like click handling, keyboard navigation, ARIA attributes). shadcn just layers styling on top of those primitives using Tailwind and CSS variables.

```tsx
// What shadcn gives you for Tabs (simplified):
import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";

// TabsPrimitive.Root provides:
//   - keyboard navigation (arrow keys switch tabs)
//   - ARIA attributes (role="tablist", aria-selected, etc.)
//   - value/defaultValue linking panels to triggers

// shadcn wraps it with styling:
function Tabs({ className, ...props }) {
  return (
    <TabsPrimitive.Root
      className={cn("flex flex-col gap-2", className)}
      {...props}    // passes value, defaultValue, onChange through
    />
  );
}
```

### Using the Tabs Component (Base UI API)

In your version of shadcn, Tabs uses `@base-ui/react` which has a slightly different API:

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

<Tabs defaultValue="tech">        {/* default selected tab */}
  <TabsList>
    <TabsTrigger value="tech">   {/* value links Trigger to Panel */}
      Tech
    </TabsTrigger>
    <TabsTrigger value="non-tech">
      Beyond Tech
    </TabsTrigger>
  </TabsList>

  <TabsContent value="tech">    {/* shown when Trigger with value="tech" is active */}
    <p>Tech content here</p>
  </TabsContent>

  <TabsContent value="non-tech">
    <p>Non-tech content here</p>
  </TabsContent>
</Tabs>
```

### Adding New shadcn Components

```bash
cd portfolio
npx shadcn@latest add dialog      # Modal/popup
npx shadcn@latest add tooltip     # Hover tooltip
npx shadcn@latest add accordion   # Expand/collapse sections
npx shadcn@latest add select      # Dropdown select
npx shadcn@latest add sheet       # Slide-in panel (great for mobile menus)
```

The component appears in `components/ui/` and you can import and use it immediately.

### CSS Variables and Theming

Your `globals.css` defines colors as CSS variables using oklch (a modern perceptually-uniform colour space):

```css
:root {
  --primary: oklch(0.55 0.2 264);   /* blue-ish accent */
}
.dark {
  --primary: oklch(0.65 0.2 264);   /* lighter blue for dark bg */
}
```

When you use `bg-primary` in Tailwind, it reads `--primary`. Change the variable once, every element using `bg-primary`, `text-primary`, `border-primary` updates automatically.

**oklch format: `oklch(lightness chroma hue)`**
- Lightness: 0 (black) to 1 (white)
- Chroma: 0 (gray) to ~0.4 (vivid)
- Hue: 0-360 degrees (264 = blue)

---

## 20. Framer Motion — Animations

### The Core Idea

Replace any HTML element with `motion.[element]` and it gains animation superpowers.

```jsx
import { motion } from "framer-motion";

// Regular div — static
<div>Hello</div>

// Motion div — can animate
<motion.div
  initial={{ opacity: 0, y: 20 }}    // start state (invisible, 20px down)
  animate={{ opacity: 1, y: 0 }}     // end state (visible, in place)
  transition={{ duration: 0.5 }}     // how long the animation takes
>
  Hello
</motion.div>
```

### Animatable Properties

```jsx
// Position
initial={{ x: -100 }}    // 100px to the left
initial={{ y: 50 }}      // 50px below
animate={{ x: 0, y: 0 }} // move to original position

// Opacity
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}

// Scale
initial={{ scale: 0 }}
animate={{ scale: 1 }}

// Rotation
initial={{ rotate: -90 }}
animate={{ rotate: 0 }}

// Multiple together:
initial={{ opacity: 0, scale: 0.9, y: 20 }}
animate={{ opacity: 1, scale: 1, y: 0 }}
```

### whileInView — Animate On Scroll

This is the most-used pattern in your portfolio:

```jsx
<motion.div
  initial={{ opacity: 0, y: 24 }}      // hidden + slightly below
  whileInView={{ opacity: 1, y: 0 }}   // animate when scrolled into view
  viewport={{ once: true }}            // only animate once per session
  transition={{ duration: 0.55 }}      // 0.55 second animation
>
  Content
</motion.div>
```

### Transitions — Controlling the Feel

```jsx
// Duration (seconds)
transition={{ duration: 0.3 }}   // fast
transition={{ duration: 0.6 }}   // medium
transition={{ duration: 1.2 }}   // slow

// Delay — useful for staggering multiple elements
transition={{ duration: 0.5, delay: 0.2 }}

// Easing — the acceleration curve
transition={{ duration: 0.5, ease: "easeOut" }}    // fast then slow
transition={{ duration: 0.5, ease: "easeIn" }}     // slow then fast
transition={{ duration: 0.5, ease: "easeInOut" }}  // slow-fast-slow

// Spring — bouncy, feels more natural
transition={{ type: "spring", stiffness: 300, damping: 30 }}

// Repeat
transition={{ repeat: Infinity, duration: 1.5 }}   // loop forever
transition={{ repeat: 3, duration: 0.5 }}          // repeat 3 times
```

### Stagger — Items Appear One After Another

```jsx
{experiences.map((exp, index) => (
  <motion.div
    key={exp.id}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.5,
      delay: index * 0.1,   // item 0 at 0s, item 1 at 0.1s, item 2 at 0.2s...
    }}
  >
    {/* content */}
  </motion.div>
))}
```

### AnimatePresence — Animate Elements As They're Removed

Used in your `BackToTop` component — the button animates in/out smoothly:

```jsx
import { AnimatePresence, motion } from "framer-motion";

<AnimatePresence>
  {visible && (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}   // start when appearing
      animate={{ opacity: 1, scale: 1 }}      // fully visible state
      exit={{ opacity: 0, scale: 0.8 }}       // animate OUT when removed
      transition={{ duration: 0.2 }}
    >
      ↑
    </motion.button>
  )}
</AnimatePresence>
// Without AnimatePresence, the exit animation wouldn't work —
// the element would just disappear instantly
```

### Looping Animation (Bounce Effect)

```jsx
<motion.div
  animate={{ y: [0, 8, 0] }}            // keyframes: 0 → 8 → 0
  transition={{
    duration: 1.5,
    repeat: Infinity,                    // loop forever
    ease: "easeInOut",
  }}
>
  ↓
</motion.div>
```

### whileHover and whileTap

```jsx
<motion.button
  whileHover={{ scale: 1.05 }}    // scale up when hovered
  whileTap={{ scale: 0.95 }}      // scale down when clicked
  transition={{ duration: 0.1 }}
>
  Click me
</motion.button>
```

---

## 21. Lucide React — Icons

Icons are SVG images in your site. lucide-react provides hundreds of them as React components.

```tsx
import { Mail, Phone, ArrowDown, Briefcase } from "lucide-react";

// Basic usage (default 24x24):
<Mail />

// Custom size:
<Mail size={16} />
<Mail size={32} />

// Custom color (via Tailwind class or inline):
<Mail className="text-blue-500" />
<Mail style={{ color: "red" }} />

// Both size and class:
<Mail size={18} className="text-muted-foreground" />
```

**Note for your project:** lucide-react v1.8.0 removed `Github` and `Linkedin` icons. Your custom SVGs in `components/icons.tsx` replace them.

---

# Part 6 — Building the Portfolio

## 22. File Structure Explained, Line by Line

```
portfolio/
│
├── app/                           ← Next.js App Router lives here
│   ├── layout.tsx                 ← Wraps EVERY page. Contains <html>, <body>,
│   │                                fonts, metadata, dark mode script
│   ├── page.tsx                   ← The "/" route. Imports all sections, renders them
│   └── globals.css                ← Global CSS: Tailwind import, CSS variables (colors),
│                                    dark mode variables, global base styles
│
├── components/                    ← All React components
│   ├── ui/                        ← shadcn/ui auto-generated (don't edit unless customising)
│   │   ├── badge.tsx              ← <Badge> component
│   │   ├── card.tsx               ← <Card>, <CardHeader>, <CardTitle>, etc.
│   │   ├── tabs.tsx               ← <Tabs>, <TabsList>, <TabsTrigger>, <TabsContent>
│   │   ├── separator.tsx          ← <Separator> (horizontal line)
│   │   ├── progress.tsx           ← <Progress> (progress bar)
│   │   └── avatar.tsx             ← <Avatar> (circular image)
│   │
│   ├── navbar.tsx                 ← Fixed top nav. Has scroll detection, active section
│   │                                highlighting via IntersectionObserver, theme toggle,
│   │                                mobile hamburger menu
│   ├── hero.tsx                   ← Full-screen intro. Typewriter effect cycling through
│   │                                roles, stats row, social links, animated CTAs
│   ├── about.tsx                  ← About section. Bio paragraphs, quick facts grid with
│   │                                varsity squash highlight, hobbies grid
│   ├── experience.tsx             ← Experience section with Tabs. Tech tab = timeline
│   │                                of 4 jobs. Beyond Tech tab = varsity card + 5 other entries
│   ├── projects.tsx               ← Featured projects (2 big cards) + other GitHub projects
│   │                                (5 smaller cards)
│   ├── skills.tsx                 ← Skills section. 4 category cards with badge pills
│   ├── education.tsx              ← Degree info + awards card with total
│   ├── contact.tsx                ← Contact cards with copy-email button + footer
│   ├── scroll-progress.tsx        ← Thin gradient bar at top tracking scroll %
│   ├── back-to-top.tsx            ← Floating button that appears after 400px scroll
│   ├── theme-toggle.tsx           ← Sun/Moon toggle for dark/light mode
│   └── icons.tsx                  ← Custom SVG icons for GitHub and LinkedIn
│
├── lib/
│   ├── data.ts                    ← ALL content data. Edit this to update portfolio.
│   └── utils.ts                   ← cn() function — merges Tailwind classes cleanly
│
├── public/                        ← Static files served as-is
│   └── Aly_Anany_Resume_2026_April18.pdf   ← Your resume (linked in navbar)
│
├── node_modules/                  ← Installed packages (never edit, never commit)
│
├── package.json                   ← Project name, scripts, dependencies list
├── package-lock.json              ← Exact dependency versions (commit this)
├── tsconfig.json                  ← TypeScript config. "@/*" path alias defined here
├── next.config.ts                 ← Next.js config. turbopack root setting
├── components.json                ← shadcn/ui config (where to put components, etc.)
└── eslint.config.mjs              ← ESLint rules for code quality
```

---

## 23. How Data Flows Through the App

```
lib/data.ts              ← Single source of truth for all content
      ↓ imported by
      ↓ (each section component imports only what it needs)
      ↓
hero.tsx          → personalInfo (name, roles, tagline, links)
about.tsx         → personalInfo, hobbies, varsityAthlete
experience.tsx    → techExperiences, nonTechExperiences, varsityAthlete
projects.tsx      → featuredProjects, otherProjects
skills.tsx        → skillCategories
education.tsx     → education
contact.tsx       → personalInfo
      ↓ used by
      ↓
app/page.tsx      ← Imports all sections, renders them in order
      ↓ wrapped by
app/layout.tsx    ← Provides fonts, metadata, dark mode, HTML wrapper
```

When you change something in `lib/data.ts`, rebuild, and every component using that data updates automatically. That's the power of centralised data.

---

## 24. Every Component Explained

### `components/navbar.tsx`

**What it does:** Fixed navigation bar with three smart behaviors.

1. **Scroll detection** — `useEffect` adds a scroll listener on mount. When `window.scrollY > 20`, sets `scrolled = true`. The nav's className toggles between `bg-transparent` (at top) and `bg-background/90 backdrop-blur-md` (frosted glass, when scrolled).

2. **Active section** — Uses `IntersectionObserver` to watch each section. When a section is 35% visible, `activeSection` is set to that section's ID. The corresponding nav link gets highlighted blue with a small dot indicator.

3. **Mobile menu** — `menuOpen` state controls whether the dropdown is visible. The icon toggles between `<Menu>` and `<X>` (hamburger and close).

### `components/hero.tsx`

**What it does:** Full-screen landing section with typewriter effect.

The typewriter effect is a state machine with three states:
- **Typing:** `displayed.length < current.length` — add one character every 80ms
- **Pausing:** `displayed.length === current.length` — wait 2000ms, then start deleting
- **Deleting:** `displayed.length > 0` — remove one character every 40ms (faster than typing)
- **Done deleting:** `displayed.length === 0` — advance to next role, reset

The stats row (3.8 GPA, $45K Scholarships, etc.) sits between the typewriter and the CTA buttons, giving immediate visual impact.

### `components/experience.tsx`

**What it does:** Tabbed experience section.

The `ExperienceCard` component handles both tech and non-tech entries. If a card has `subRoles`, it renders those as small pill badges (used for YMCA's multiple roles).

The `VarsityCard` is a separate, visually distinct card at the top of the "Beyond Tech" tab. It has a gradient background, large emoji, and an Active status badge.

The timeline effect is pure CSS — a vertical `w-px bg-border` line with an `absolute left-[-5px]` dot.

### `components/scroll-progress.tsx`

**How it works:**
```
progress = (window.scrollY / (document.scrollHeight - window.innerHeight)) * 100
```
- `window.scrollY` = how many pixels scrolled from top
- `document.documentElement.scrollHeight` = total page height
- `window.innerHeight` = visible viewport height
- Their difference = how many pixels are "scrollable"
- The ratio × 100 = percentage scrolled

The width of the progress bar is set via inline `style={{ width: \`${progress}%\` }}` rather than Tailwind because it's a dynamic value Tailwind can't pre-generate.

### `components/theme-toggle.tsx`

**How dark mode works:**

1. `layout.tsx` has an inline `<script>` that runs before React loads. It reads `localStorage.getItem('theme')` and adds `class="dark"` to `<html>` if needed. This prevents the flash of wrong theme.

2. The toggle button reads if `<html>` currently has `.dark` class → shows Sun (click to go light) or Moon (click to go dark).

3. Clicking calls `document.documentElement.classList.toggle("dark", isDark)` and saves to localStorage.

4. All the CSS variables in `globals.css` have `.dark` overrides, so the whole colour theme flips instantly.

### `components/contact.tsx`

**Copy email button:**
1. Calls `navigator.clipboard.writeText(email)` — the modern Clipboard API
2. Has a fallback using `document.execCommand("copy")` for older browsers
3. Sets `copied = true` → icon changes from `<Copy>` to `<Check>` (green)
4. After 2 seconds, resets back to `<Copy>`

---

## 25. The UI Enhancements Explained

### Scroll Progress Bar

A `<div>` fixed at `top-0 left-0 z-[200]` (above everything) with:
- Height: `3px`
- Background: `bg-gradient-to-r from-blue-600 to-cyan-400`
- Width: dynamically set via `style={{ width: \`${progress}%\` }}`
- `pointer-events-none` so it never blocks clicks

### Back to Top Button

Uses `AnimatePresence` from Framer Motion so it animates in/out smoothly:
- Appears when `window.scrollY > 400`
- `initial={{ opacity: 0, scale: 0.8, y: 10 }}` — starts invisible, small, below position
- `animate={{ opacity: 1, scale: 1, y: 0 }}` — fades in, grows to full size, rises
- `exit={{ opacity: 0, scale: 0.8, y: 10 }}` — reverses when disappearing
- Click calls `window.scrollTo({ top: 0, behavior: "smooth" })`

### Dark Mode (No Flash)

The anti-flash script in `layout.tsx`:
```javascript
(function(){
  var t = localStorage.getItem('theme');
  if (t === 'dark') document.documentElement.classList.add('dark');
})();
```
This is an IIFE (Immediately Invoked Function Expression) that runs synchronously as the browser parses the HTML, before any React code executes. The dark class is set before any paint, so there's no white flash.

### Active Nav Links with IntersectionObserver

```
IntersectionObserver watches: about, experience, projects, skills, education, contact sections

When "experience" section is 35% visible:
  → setActiveSection("experience")
  → navLinks.map() re-renders
  → The "Experience" link gets text-primary + dot indicator
  → All other links stay text-muted-foreground
```

---

# Part 7 — Shipping It

## 26. Git — Saving and Sharing Your Work

Git is a version control system. It tracks every change you make to your code, lets you go back in time, and lets you share code with others (via GitHub).

### First-Time Setup

```bash
git config --global user.name "Aly Anany"
git config --global user.email "aanany@uoguelph.ca"
```

### The Basic Git Workflow

```bash
# 1. Initialise a new Git repository in your project folder
git init

# 2. See what's changed
git status
# Shows: Untracked files (new), Modified files (changed), Staged files (ready to commit)

# 3. Stage files for commit (add to the "snapshot")
git add .               # stage ALL changed files
git add app/page.tsx    # stage one specific file
git add components/     # stage entire folder

# 4. Commit — save the snapshot with a message
git commit -m "Add hero section with typewriter effect"
# The message should describe WHAT changed and WHY (briefly)

# 5. See your commit history
git log
git log --oneline   # compact view
```

### Working with GitHub

```bash
# 1. Create a new repo on github.com (no README, no .gitignore — empty)

# 2. Connect your local repo to GitHub
git remote add origin https://github.com/alyanany97/portfolio.git

# 3. Push your code to GitHub
git push -u origin main
# -u sets "origin main" as the default, so next time just: git push
```

### The .gitignore File

Some files should never be committed (node_modules, secrets, etc.):

```
# .gitignore (create this in your project root)
node_modules/       ← 500MB+ of installed packages (can be regenerated with npm install)
.next/              ← Build output (regenerated on build)
.env                ← Secrets like API keys (NEVER commit these)
.env.local
*.log
.DS_Store           ← Mac OS metadata files
Thumbs.db           ← Windows metadata
```

### Common Git Commands

```bash
# See what changed in a file
git diff app/page.tsx

# Undo changes to a file (before staging)
git restore app/page.tsx

# Unstage a file (after git add but before commit)
git restore --staged app/page.tsx

# Create and switch to a new branch
git checkout -b feature/add-dark-mode

# Switch between branches
git checkout main
git switch main       # modern syntax

# Merge a branch into main
git checkout main
git merge feature/add-dark-mode

# Pull latest changes from GitHub
git pull

# Clone a repository from GitHub
git clone https://github.com/alyanany97/portfolio.git
```

---

## 27. Deploying to Vercel

Vercel is the company that makes Next.js. Deploying there is zero-configuration.

### Step 1: Push Your Project to GitHub

```bash
# In your portfolio folder:
git init
git add .
git commit -m "Initial portfolio"
git branch -M main

# Create a repo on github.com called "portfolio", then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to **vercel.com** and click "Sign Up" — choose "Continue with GitHub"
2. Click **"Add New Project"**
3. Find your `portfolio` repo and click **"Import"**
4. Vercel auto-detects Next.js. Leave all settings as default.
5. Click **"Deploy"**

Vercel builds your project (`npm run build`) and deploys the output. Takes about 60 seconds.

### Step 3: Your Site Is Live

You get a URL like `portfolio-username.vercel.app`. That's your live site.

### Automatic Redeployments

After the initial setup, every time you push to GitHub:
```bash
# Make a change
git add .
git commit -m "Update project descriptions"
git push
# Vercel detects the push and redeploys automatically in ~30 seconds
```

### Custom Domain

In Vercel dashboard:
1. Go to your project
2. Click **"Settings"** → **"Domains"**
3. Type your domain (e.g., `alyanany.com`)
4. Follow the DNS instructions to point your domain to Vercel

### Environment Variables

For secrets (API keys, database URLs), never put them in your code:
1. Vercel dashboard → Project → **"Settings"** → **"Environment Variables"**
2. Add them there — they get injected at build time
3. Access in code via `process.env.VARIABLE_NAME`

---

## 28. How to Update Your Portfolio

### The Only File You Usually Need to Edit

**`lib/data.ts`** — change anything here and rebuild.

```typescript
// Add a new job to tech experience:
export const techExperiences = [
  {
    id: 5,               // increment the ID
    company: "New Company",
    role: "Your Role",
    period: "May 2026 – Present",
    location: "City, ON",
    bullets: [
      "What you did and its impact",
      "Another achievement",
    ],
    tags: ["Tech1", "Tech2"],
    subRoles: undefined,
  },
  // ... existing entries
];
```

### Updating After a GitHub Push

```bash
# Edit lib/data.ts in VS Code
# Save the file
git add lib/data.ts
git commit -m "Add new role at Company X"
git push
# Vercel redeploys in ~30 seconds
```

---

# Part 8 — When Things Break

## 29. Reading Error Messages

Errors will happen. The skill is reading them, not avoiding them.

### Next.js Build Errors

```
Error: Export 'Github' was not found in module 'lucide-react'
           ↑ What failed        ↑ Where it failed

Solution: Check what the icon is actually called in this version.
Use: node -e "const l = require('./node_modules/lucide-react/...'); 
              console.log(Object.keys(l).filter(k => /git/i.test(k)))"
```

### TypeScript Errors

```
Type 'string' is not assignable to type 'number'
     ↑ What you gave    ↑ What was expected

Solution: Check the type definition. Either change your data or update the type.
```

```
Property 'subRoles' does not exist on type 'Experience'
     ↑ The property you used           ↑ The type that doesn't have it

Solution: Add subRoles to the Experience type:
type Experience = {
  ...existing fields...
  subRoles?: string[];   // add this
};
```

### React Errors

```
Error: Each child in a list should have a unique "key" prop.
Solution: Add key={uniqueValue} to the element returned from .map()
```

```
Error: Cannot read properties of undefined (reading 'map')
Translation: You tried to .map() something that doesn't exist yet
Solution: Add optional chaining: data?.map(...) or check if data exists first
```

### The "Hydration" Error

```
Error: Hydration failed because the initial UI does not match
       what was rendered on the server.
```

This happens when the server renders one thing and the browser renders something different.
Common cause: reading `localStorage` or `window` during render (they don't exist on server).

```tsx
// WRONG — reads window during render (crashes on server)
const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// RIGHT — only read after mount:
const [isDark, setIsDark] = useState(false);
useEffect(() => {
  setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
}, []);
```

---

## 30. Browser DevTools

Press **F12** (or right-click → "Inspect") to open DevTools.

### The Elements Tab
- See the actual HTML and CSS of any element
- Click any element in the page to highlight it in the HTML
- Edit CSS properties in real-time to test changes

### The Console Tab
- See `console.log()` output from your JavaScript
- See errors in red — click the error to go to the source
- Run JavaScript interactively (type commands and press Enter)

### The Network Tab
- See all requests your page makes (images, scripts, API calls)
- Check if resources are loading and how long they take
- See request/response data

### Useful Console Commands
```javascript
// Check localStorage
localStorage.getItem('theme')
localStorage.setItem('theme', 'dark')
localStorage.clear()

// Check an element
document.getElementById('hero')
document.querySelector('.navbar')
document.querySelectorAll('section')  // all sections

// Scroll to test scroll-related features
window.scrollTo(0, 500)   // scroll 500px down
window.scrollY             // how far you've scrolled
```

---

## 31. Common Errors and Fixes

| Error | Cause | Fix |
|-------|-------|-----|
| `Module not found: Can't resolve '@/components/...'` | Wrong import path or file doesn't exist | Check the file path is correct |
| `'X' is not defined` | Used a variable that doesn't exist in scope | Check imports at the top of the file |
| `Objects are not valid as a React child` | Tried to render an object directly | Access a specific property: `{obj.name}` not `{obj}` |
| `Invalid hook call` | Called a hook outside a component or inside a callback | Move hook to the top level of your component |
| `Cannot update a component while rendering a different component` | Calling a state setter during render | Move the state update into a useEffect or event handler |
| Build warning about `key` prop | .map() without key | Add `key={uniqueValue}` to the outermost element in .map() |
| White flash in dark mode | Dark class applied after render | The anti-flash script in layout.tsx handles this |
| `npm install` fails | Node/npm version mismatch or network issue | Try deleting `node_modules` and `package-lock.json`, then `npm install` |

---

# Part 9 — Reference

## 32. Complete Rebuild Checklist

If you wanted to rebuild this entire portfolio from scratch, here are every step in order:

### Phase 1: Setup

```bash
# 1. Install Node.js from nodejs.org
# 2. Install VS Code from code.visualstudio.com
# 3. Install Git from git-scm.com

# 4. Create the project
npx create-next-app@latest portfolio --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*" --yes
cd portfolio

# 5. Add shadcn/ui
npx shadcn@latest init --yes --defaults

# 6. Add shadcn components you'll use
npx shadcn@latest add card badge tabs separator progress avatar

# 7. Install additional packages
npm install framer-motion lucide-react
```

### Phase 2: Data and Configuration

```
8.  Create lib/data.ts — put ALL content here (personalInfo, experiences, projects, skills, education, hobbies, varsityAthlete)
9.  Update app/globals.css — set CSS variable colors (primary = blue oklch(0.55 0.2 264))
10. Update app/layout.tsx — metadata, fonts, dark mode anti-flash script
```

### Phase 3: UI Utilities

```
11. Create components/icons.tsx — custom GitHub and LinkedIn SVGs
12. Create components/theme-toggle.tsx — Sun/Moon button
13. Create components/scroll-progress.tsx — top gradient bar
14. Create components/back-to-top.tsx — floating arrow button
```

### Phase 4: Sections (in render order)

```
15. Create components/navbar.tsx — fixed nav with scroll, active section, mobile menu
16. Create components/hero.tsx — typewriter, stats row, social links, CTAs
17. Create components/about.tsx — bio, quick facts, varsity highlight, hobbies
18. Create components/experience.tsx — tabs, VarsityCard, ExperienceCard timeline
19. Create components/projects.tsx — featured cards + GitHub grid
20. Create components/skills.tsx — category cards with badge pills
21. Create components/education.tsx — degree card + awards card
22. Create components/contact.tsx — contact cards, copy email, footer
```

### Phase 5: Wire Everything Up

```
23. Update app/page.tsx — import and render all sections + ScrollProgress + BackToTop
24. Copy resume PDF to public/ folder
```

### Phase 6: Test

```bash
npm run dev     # check everything looks right at localhost:3000
npm run build   # check no TypeScript or build errors
```

### Phase 7: Deploy

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
# → Deploy on vercel.com
```

---

## 33. Glossary

| Term | Meaning |
|------|---------|
| **Async** | Code that runs out of order — started, then continued later |
| **Await** | Pause an async function until a Promise resolves |
| **Build** | The process of converting your React/TypeScript code into optimised HTML/JS/CSS |
| **Callback** | A function passed as an argument to another function, called later |
| **CDN** | Content Delivery Network — servers worldwide that serve files from the nearest location |
| **Client Component** | React component that runs in the browser (`"use client"`) |
| **Closure** | A function that "remembers" variables from its outer scope |
| **Component** | A function that returns JSX — a reusable piece of UI |
| **CSS Variable** | Reusable value in CSS, defined with `--name: value`, used with `var(--name)` |
| **Default Export** | `export default function Foo()` — imported as any name: `import Foo from './foo'` |
| **Dependency Array** | The `[]` in `useEffect(() => {}, [deps])` — controls when the effect re-runs |
| **Destructuring** | Extracting values from objects/arrays: `const { name } = obj` |
| **DOM** | Document Object Model — the browser's representation of your HTML as a tree of objects |
| **ES6** | ECMAScript 2015 — major JavaScript update that added arrow functions, classes, modules, etc. |
| **ESLint** | Tool that checks your code for mistakes and style issues |
| **File-Based Routing** | Next.js feature where files in `app/` folder = URL routes |
| **Fragment** | `<>...</>` in JSX — a wrapper that renders no actual HTML element |
| **Framer Motion** | Animation library for React |
| **Generic** | Type parameter that works with any type: `function first<T>(arr: T[]): T` |
| **Hook** | A special React function (must start with "use") that adds features to components |
| **HTML Entity** | Special character codes: `&amp;` = &, `&lt;` = <, `&gt;` = >, `&copy;` = © |
| **Hydration** | The process of React taking over static HTML and making it interactive |
| **IIFE** | Immediately Invoked Function Expression: `(function() { ... })()` — runs instantly |
| **import/export** | Module system for sharing code between files |
| **Inline Style** | `style={{ color: 'red' }}` — CSS applied directly in JSX |
| **IntersectionObserver** | Browser API that watches if elements are visible in the viewport |
| **JSX** | JavaScript XML — HTML-like syntax used in React components |
| **key** | Special React prop for list items that helps React track changes |
| **Layout** | In Next.js App Router: a component that wraps its child pages |
| **localStorage** | Browser storage that persists after the page closes |
| **Metadata** | Page information: title, description, Open Graph tags for SEO |
| **Module** | A file that exports code, importable by other files |
| **Named Export** | `export const foo = ...` — imported by exact name: `import { foo } from './foo'` |
| **Node.js** | JavaScript runtime — lets you run JS outside a browser |
| **npm** | Node Package Manager — installs libraries from the internet |
| **Object Spread** | `{ ...obj, newKey: val }` — copy object and add/override properties |
| **oklch** | Modern CSS colour format: `oklch(lightness chroma hue)` |
| **Optional Chaining** | `obj?.prop?.nested` — safely access nested values without crashing |
| **package.json** | Config file listing project name, scripts, and dependencies |
| **Promise** | Represents a value that will exist in the future (from an async operation) |
| **Props** | Data passed from parent to child component (read-only) |
| **React** | JavaScript library for building UIs |
| **Reconciliation** | React's process of comparing old and new virtual DOM to find what changed |
| **Re-render** | When React re-runs a component function and updates the DOM |
| **Server Component** | React component that runs at build time on the server |
| **shadcn/ui** | Collection of copy-pasteable React components |
| **SSG** | Static Site Generation — pages built at build time |
| **State** | Data inside a component that can change, triggering re-renders |
| **Tailwind CSS** | Utility-first CSS framework — apply styles via class names |
| **Template Literal** | `` `Hello ${name}!` `` — string with embedded expressions |
| **TypeScript** | JavaScript with type annotations |
| **Union Type** | `type A = 'x' \| 'y' \| 'z'` — value must be one of the listed options |
| **useEffect** | Hook for running code after render (side effects) |
| **useState** | Hook for managing state in a component |
| **Utility Class** | A single-purpose CSS class (Tailwind): `text-blue-500`, `p-4`, `flex` |
| **Vercel** | Hosting platform for Next.js apps — free tier available |
| **Viewport** | The visible area of the browser window |
| **Virtual DOM** | React's in-memory copy of the DOM for efficient updates |
| **z-index** | CSS property controlling which elements appear on top of others |

---

*Last updated: April 2026*
*Stack: Next.js 16.2.4, React 19, Tailwind v4, shadcn/ui (base-ui), Framer Motion 12, TypeScript 5*
