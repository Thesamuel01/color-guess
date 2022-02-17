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

function changeBallsBackgroundColor() {
  const colors = document.querySelectorAll('.ball');

  for (let index = 0; index < colors.length; index += 1) {
    const element = colors[index];
    const randomColor = generateRandomColor();

    element.style.backgroundColor = randomColor;
  }
}

changeBallsBackgroundColor();
