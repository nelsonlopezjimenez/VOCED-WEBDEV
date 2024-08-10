// sync async await fetch example
//
let max = 80;
let delay = 3500; //in milliseconds

function myFunc4() {
  let build = '';
  let word = 'FINAL';
  for (let i = 0; i < max / 10; i++) {
    build += word + ' - ';
  }
  return `${build}\n`;
}
function myFunc2(val) {
  let build = '';
  for (let i = 0; i < max; i++) {
    build += val;
  }
  build += '\n';
  return build;
}
function myFunc1() {
  let build = '';
  for (let i = 0; i < max; i++) {
    build += '.';
  }
  build += '\n';
  return build;
}
const myFunc3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let build = '';
    for (let i = 0; i < max; i++) {
      build += '|';
    }
    build += '\n';
    resolve(build);
  }, delay);
});

// myFunc3
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log(err);
//   });

function main() {
  console.log(myFunc1());
  console.log(myFunc2('='));
  //   result += myFunc3(); // myFunc3 is not a function
  console.log(myFunc3.then((d) => d)); // FIRST LINE Promise {<pending>}
  myFunc3.then((d) => console.log(d));
  console.log(myFunc2('-'));
  console.log(myFunc2('#'));
  console.log(myFunc4());
}
function mainSecond() {
  let result = '';
  result += myFunc1();
  result += myFunc2('=');
  //   result += myFunc3(); // myFunc3 is not a function
  console.log(myFunc3.then((d) => d)); // FIRST LINE Promise {<pending>}
  myFunc3.then((d) => console.log(d));
  result += myFunc2('-');
  result += myFunc2('#');
  result += myFunc4();
  console.log(result);
}
main();
