function getAnswer() {
  const colors = document.querySelectorAll('.ball');
  const randomIndex = Math.floor(Math.random() * 5);
  const answer = colors[randomIndex].style.backgroundColor;

  return answer;
}

function generateRandomColor() {
  let colorString = 'rgb(';

  for (let index = 0; index < 3; index += 1) {
    const number = Math.floor(Math.random() * 255);

    if (index === 2) {
      colorString += `${number})`;
    } else {
      colorString += `${number}, `;
    }
  }

  return colorString;
}

function showColorRGBCode() {
  const colorParagraph = document.querySelector('#rgb-color');

  colorParagraph.innerHTML = answer;
}

function changeBallsBackgroundColor() {
  const colors = document.querySelectorAll('.ball');

  for (let index = 0; index < colors.length; index += 1) {
    const element = colors[index];
    const randomColor = generateRandomColor();

    element.style.backgroundColor = randomColor;
  }
}

function giveTheResult() {
  const options = document.querySelector('#colors_container');

  options.addEventListener('click', (event) => {
    const element = event.target;
    const isABall = element.className.includes('ball');
    const answerparagraph = document.querySelector('#answer');

    if (isABall) {
      const isTheCorrectAnwser = element.style.backgroundColor === answer;

      if (isTheCorrectAnwser) {
        answerparagraph.innerHTML = 'Acertou!';
      } else {
        answerparagraph.innerHTML = 'Errou! Tente novamente!';
      }
    }
  });
}

changeBallsBackgroundColor();
const answer = getAnswer();
showColorRGBCode();
giveTheResult();
