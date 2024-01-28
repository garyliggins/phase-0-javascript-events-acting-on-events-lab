// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#ff69b4"

//moving element
// dodger.style.bottom = "100px";
//back to starting point
// dodger.style.bottom = "0px";
//bottom left of screen
// dodger.style.left = "0px";

document.addEventListener("keydown", function (event) {
    console.log(event);
  })

//function to move left
  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  };

  //event listenerleft
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  //move dodger right function
  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  };

   //event listener right
   document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
