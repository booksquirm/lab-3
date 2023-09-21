const getMouseButton = code => {
    let button = "unknown";
    switch (code) {
      case 0:
        button = "left";
        break;
      case 1:
        button = "middle";
        break;
      case 2:
        button = "right";
        break;
    }
    return button;
};

const mouseInfo = e => {
    console.log(`Mouse event: ${e}, button: ${getMouseButton(e.button)}, X: ${e.clientX}, Y: ${e.clientY}`
    );
};

document.addEventListener("click", mouseInfo);


const locationElement = document.getElementById("location");


window.addEventListener("mousemove", function(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  locationElement.textContent = `Mouse position: X: ${mouseX}, Y: ${mouseY}`;
});

const elementToAnimate = document.querySelector('#animated');
const clickMeButton = document.querySelector('#click-me');

clickMeButton.addEventListener('click', () => {
  elementToAnimate.style.transform = 'scale(1.1)';

  setTimeout(() => {
    elementToAnimate.style.transform = 'scale(1)';
  }, 1000);
});

const myButton = document.querySelector("#myButton");
const myElement = document.querySelector("#myElement");

myButton.addEventListener("click", () => {
  myElement.style.opacity = 1;
  myElement.classList.add("animate");
});

