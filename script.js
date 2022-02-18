let guessColor;
let score = -3;

function updateScore() {
  score += 3;

  const scoreText = document.querySelector('#score');
  scoreText.innerHTML = `Placar: ${score}`;
}

function getColorContainer() {
  const colorsContainer = document.querySelector('#colors_container');

  return colorsContainer;
}

function setAnswer() {
  const colors = document.querySelectorAll('.ball');
  const randomIndex = Math.floor(Math.random() * 5);

  guessColor = colors[randomIndex].style.backgroundColor;
}

function showColorRGBCode() {
  const colorParagraph = document.querySelector('#rgb-color');

  colorParagraph.innerHTML = guessColor;
}

function checkRepeatedColors(colorString) {
  const balls = document.querySelectorAll('.ball');

  for (let index = 0; index < balls.length; index += 1) {
    const element = balls[index];
    const elementBackgroundColor = element.style.backgroundColor;
    const isSameColor = elementBackgroundColor === colorString;

    if (isSameColor) {
      return true;
    }
  }

  return false;
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

  const color = checkRepeatedColors(colorString) ? generateRandomColor() : colorString;

  return color;
}

function createBall() {
  const ball = document.createElement('div');
  ball.className = 'ball';

  return ball;
}

function changeBallsBackgroundColor(ball) {
  const element = ball;
  const randomColor = generateRandomColor();

  element.style.backgroundColor = randomColor;
}

function addBalls() {
  const options = getColorContainer();

  for (let index = 0; index < 6; index += 1) {
    const ball = createBall();

    changeBallsBackgroundColor(ball);

    options.appendChild(ball);
  }
}

function checkResult(element) {
  const isTheCorrectAnwser = element.style.backgroundColor === guessColor;
  let result = '';

  if (isTheCorrectAnwser) {
    result = 'Acertou!';
    updateScore();
  } else {
    result = 'Errou! Tente novamente!';
  }

  return result;
}

function lowerAttempts(attempts) {
  const newAttempt = attempts - 1;

  return newAttempt;
}

function showResult() {
  const options = getColorContainer();
  let attempts = 1;

  options.addEventListener('click', (event) => {
    if (attempts !== 0) {
      const element = event.target;
      const isABall = element.className.includes('ball');
      const resultMessage = document.querySelector('#answer');

      if (isABall) {
        resultMessage.innerHTML = checkResult(element);
        attempts = lowerAttempts(attempts);
      }
    }
  });
}

function resetBalls(balls) {
  for (let index = 0; index < balls.length; index += 1) {
    const element = balls[index];

    changeBallsBackgroundColor(element);
  }
}

function resetResultMessage() {
  const resultMessage = document.querySelector('#answer');

  resultMessage.innerHTML = 'Escolha uma cor';
}

function resetGame() {
  const resetButton = document.querySelector('#reset-game');

  resetButton.addEventListener('click', () => {
    const balls = document.querySelectorAll('.ball');

    resetBalls(balls);
    setAnswer();
    showColorRGBCode();
    resetResultMessage();
    showResult();
  });
}

addBalls();
setAnswer();
showColorRGBCode();
showResult();
resetGame();
updateScore();
