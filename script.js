'strict mode'
//Function
function calculateTip() {
  //Monto a calcular de $
  let monto = document.getElementById("Monto").value;

  //Validation
  if (monto === "" || serviceQuality == 0) {
    window.alert("Please enter some values to get this baby up and running!");
    return; // To prevent infinite looping
  }

  //Check to see if this input is empty or less than or equal to 1
  if (numPeople === "" || numPeople <= 1) {
    numPeople = 1;

    document.getElementById("each").style.display = "none;";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Do some math!
  let total = monto * 0.75;
  // total = Math.round(total*100) * 0.75;
  // total = total.toFixed(2);

  //Display the tip!
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//Clicking the button calls our custom function
document.getElementById("calculate").onclick = function () {
  calculateTip();
};
