---
title: JavaScript Fundamentals Exercises
date: 7/14/2024
myData: 7 Exercises using jasmine test suite
---
### 1. helloWorld

Write a function called **helloWorld** which accepts no arguments and return the string "hello world"

Try different approaches including template string (backticks). Use a literal string, declare different variables and concatenate them using the concatenation operator ('+'), as well as template string operator (backticks). 

Example using concatenation operator and literals: return "hello" + " world"
Example using backticks: return `hello world`

Example using variables: 
```
let first = 'hello', let second = 'world'; 
using concat op: return first + second
using template string: return `${first} ${second}`
```

Examples:

```js
helloWorld() // "hello world"
```

### 2. charAt

Write a function called **charAt** which accepts a string and an index (number) and returns the character at that index.

The function should return an empty string if the number is greater than the length of the string.

**Do not use the built in charAt method**

Examples:

```js
charAt('awesome', 2) // 'e'
charAt('awesome', 12) // ''
```

### 3. appendToString

The function should return a new string which consists of the second string appended to the first string.

Examples:

```js
appendToString("Hello", " World!"); // "Hello World!"
appendToString("Foo", "bar"); // "Foobar"
appendToString("bar", "Foo"); // "barFoo"
appendToString("", "test"); // "test"
appendToString("other test", ""); // "other test"
```

### 4. stringIndexOf

Write a function called **stringIndexOf,** which accepts two strings: the first is a word and the second is a single character.

The function should return the first index in the word at which the character exists or `-1` if the character is not found.

Do not use the built in `"string".indexOf()` function!

Examples:

```js
stringIndexOf('awesome', 'e') // 2
stringIndexOf('awesome', 'z') // -1
```

### 5. repeat

Write a function called **repeat,** which accepts a string and a number and returns a new string with the string repeated that number of times.

**Do not use the built in repeat method**

Examples:

```js
repeat('Matt', 3) // 'MattMattMatt'
repeat('Elie', 2) // 'ElieElie'
repeat('Michael', 0) // ''
```