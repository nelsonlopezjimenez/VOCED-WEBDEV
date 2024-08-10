# karyosim/public/quiz

## 8.4.2024

### convert-plaintext-to-mcq.js: 
It converts plaintext to multiple choice questions.
Initially I used js object: {title:'question statement', options: [1,2,3,4]} in an array
Then I copy/pasted questions and decided to do array of arrays
[ [0,1,2,3,4], [], [], [], []]
where title is now at zero, and the four questions at 1,2,3,4 index position.
Because dealing with multiple lines editing make it easier than adding property names
curly braces were replaced by brackets, and quotes were added using alt.