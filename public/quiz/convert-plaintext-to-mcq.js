import data from './questionArr-0f-arr.js';
// convert-plaintext-to-mcq.js node.exe convert-plaintext-to-mcq.js > test.test.html
function makeStyle() {
  return `<style>
    .ibpage-problems__item {
        background-color: rgb(241, 245, 241);
    }

    .form-check {
        display: flex;
        justify-content: space-between;
    }

   /* .form-check[data-correct='true'] {
        background-color: green;
    }

    .form-check--v2[data-correct='false'] {
        background-color: rgb(176, 27, 27);
    }
    */
    .form-check__icon {
        display: inline;
    }
    make-green { background-color: 'green'}
    make-border-red {border: 4px solid red }
</style>`;
}

function makeHeader(title, currentDate) {
  return `<!DOCTYPE html>
<html lang="en">
 <!-- last modified: 8.4.2024${currentDate} -->
<head>
    <meta charset="UTF-8">
    <meta name="keywords" content="convert plaintext to multiple choice format questions">
    <meta name="description" content="programmatically convert plaintext to html">
    <meta name="author" content="Nelson Lopez">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ${makeStyle()}
    <title>${title}</title>
</head>
<body>`;
}

function makeBodySectionHeader(questionNumber, title) {
  let stub = 'Add variable';
  return `<section class="ibpage-problems__item" id="${title}">
    <div class="ibpage-problems__header">
        <span class="m-r-5 h3">${questionNumber}</span>
        <div>
            <p>${title}.</p>
        </div>
    </div>`;
}

function makeBodyFormCheck(questionNumber, unique, content, j, one2four) {
  return `<div class="ibpage-problems__options">
    <div class="form-check" data-correct="${j++ === 0 ? true : false}"
        data-problem-index=${questionNumber}>
        <input class="form-check__input " type="radio" name="${
          unique + questionNumber
        }"
            id="${unique + content}" value="${one2four}">
        <label class="form-check__label" for="${unique + content}">
            ${content}
        </label>
        <img class="form-check__icon form-check__icon--success"
            src="green-check-99d545.svg" />
        <img class="form-check__icon form-check__icon--error"
            src=" cross-616d53c.svg" />
    </div>
</div>\n`;
}

function makeLocalScript() {
  return `<script>
  let questionSection = document.querySelectorAll('.ibpage-problems__item');
  let myRadio = document.querySelectorAll('input');
  let myImg = document.querySelectorAll('img');
  let mySection = document.querySelectorAll('section');


  function selectSection(order) {
      let mySelection = mySection[order].children; //it is HTML element
      // console.dir(mySelection);
      return mySelection;
  }

  function selectHeader(mySelection) {
      let header = mySelection[0]
      let myChildren = header.children
      let mySpan = myChildren[0].innerHTML;
      let title = myChildren[1].innerHTML
      
      return mySpan+'\n'+'title'+'\n'
  }
  
  function buildThePage() {
      let build = makeHeader("QUIZ-V2", '8.5.2024'); //HEADER
      for (let i = 0; i < mySection.length; i++){
          let numberTitle =  selectHeader(selectSection(i))
          build += '\n' + numberTitle + '\n';
          let first = selectFirsQuestion(selectSection(i));
          let second = selectQuestion(selectSection(i), 2);
          let third = selectQuestion(selectSection(i), 3)
          let fourth = selectQuestion(selectSection(i), 4)
          build += first + second + third + fourth;
          build += '/section>' + '\n' + 'cript></script>' + '\n' + '</body>' + '\n' + '</html>'
            // 
  // selectQuestion(selectSection(0), 3)
  // selectQuestion(selectSection(0), 4)

      }
  }

  function selectFirsQuestion(mySelection) {
      let isCorrect = mySelection[1].children[0].getAttribute('data-correct'); //true or false
      let type = mySelection[1].children[0].children[0].type;
      let value = mySelection[1].children[0].children[0].value;
      let name = mySelection[1].children[0].children[0].name;
      let title = mySelection[1].children[0].children[1].innerHTML
      let firstImg = mySelection[1].children[0].children[2]
      let secondImg = mySelection[1].children[0].children[3]
      console.dir(firstImg);
      mySelection[1].children[0].classList.add('make-green')
      // mySelection[1].children[0].children[3].classList.add('make-inv')
      secondImg.classList.add('make-inv')
      // mySelection[1].style.backgroundColor='green'
  }
  function selectQuestion(mySelection, number) {
      let isCorrect = mySelection[number].children[0].getAttribute('data-correct'); //true or false
      let type = mySelection[number].children[0].children[0].type;
      let value = mySelection[number].children[0].children[0].value;
      let name = mySelection[number].children[0].children[0].name;
      let title = mySelection[number].children[0].children[1].innerHTML
      let firstImg = mySelection[number].children[0].children[2]
      let secondImg = mySelection[number].children[0].children[3]
      console.dir(firstImg);
      mySelection[number].children[0].classList.add('make-red')
      // mySelection[1].children[0].children[3].classList.add('make-inv')
      firstImg.classList.add('make-inv')
      // mySelection[1].style.backgroundColor='green'
  }
    </script>`;
}
function makeLocalScript2() {
  return `<script>
        let questionSection = document.querySelectorAll('.ibpage-problems__item');
        let myRadio  = document.querySelectorAll('input');
        let myImg = document.querySelectorAll('img');

        for (let i = 0; i < myImg.length; i++){
            myImg[i].setAttribute('hidden', true);

        }
        console.log(questionSection.length)
        console.log(myRadio.length)
        console.log(myImg.length)

        // console.dir(questionSection[0].childNod
        for (let i = 0 ; i < myRadio.length; i++){
            // console.log(questionSection[parseInt(i/4)].childNodes[3].childNodes[7].childNodes[5].setAttribute('hidden', true))
            myRadio[i].addEventListener('click', (event) => {
                console.log(questionSection[i/4].id)
                console.dir(questionSection[i/4].childNodes)
                if (event.target.value === 1){
                   questionSection[i/4].childNodes[2].style.backgroundColor-'green';
                }

            })
        }
    </script>`;
}
function makeAfterFormCheck() {
  return `\n</div>\n</section>\n${makeLocalScript()}\n</html>`;
}
function repeat4times(questionNumber) {
  let result = '';
  for (let i = 1; i < 5; i++) {
    result += makeBodyFormCheck(
      questionNumber,
      'cxg',
      data[questionNumber][i],
      i === 1 ? 0 : 1,
      i
    );
  }
  result += `</section>`;
  return result;
}
function repeatTotalQuestions() {
  let result = '';
  result += makeHeader('Midterm', '8.4.2024');
  for (let i = 0; i < data.length; i++) {
    result += makeBodySectionHeader(i, data[i][0]);
    result += repeat4times(i);
  }
  result += makeAfterFormCheck();
  return result;
}

function mainA() {
  console.log(makeHeader('Midterm', '8.4.2024'));
  console.log(makeBodySectionHeader(0, data[0][0]));
  console.log(makeBodyFormCheck(1, 'cxg', data[0].questions[0], 0));
  console.log(makeBodyFormCheck(1, 'cxg', data[0].questions[1], 1));
  console.log(makeBodyFormCheck(1, 'cxg', data[0].questions[2], 1));
  console.log(makeBodyFormCheck(1, 'cxg', data[0].questions[3], 1));
  console.log(makeAfterFormCheck());
}
function main() {
  console.log(makeHeader('Midterm', '8.4.2024'));
  console.log(makeBodySectionHeader(0, data[0][0]));
  console.log(repeat4times(0));
  console.log(makeBodySectionHeader(1, data[0][0]));
  console.log(repeat4times(1));
  console.log(makeAfterFormCheck());
}
// console.log(data)
console.log(repeatTotalQuestions());
