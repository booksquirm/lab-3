const getMouseButton = code => {
    let button = "unknown";
    switch (code) {
      case 0: // 0 is the code for the left mouse button
        button = "left";
        break;
      case 1: // 1 is the code for the middle mouse button
        button = "middle";
        break;
      case 2: // 2 is the code for the right button
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

const showMessage = (e) => {
    alert(mouse_location(e));
};
  
window.onload=function(){
    const buttonElement = document.getElementById("myButton");
    buttonElement.addEventListener("click", showMessage);
}

const mouse_location = e => {
    return [e.clientX, e.clientY]
}

const locationElement = document.getElementById("location");

window.addEventListener("mousemove", function(event) {
  // Get the mouse position
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  locationElement.textContent = `Mouse position: X: ${mouseX}, Y: ${mouseY}`;
});