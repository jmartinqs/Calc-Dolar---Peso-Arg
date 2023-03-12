"strict mode";

//Function//

function calculateTip() {
  //Monto a calcular de $
  let monto = document.getElementById("Monto").value;

  //Validation to initialize
  if (monto === "") {
    window.alert("Ingrese un monto para continuar");
    return; // To prevent infinite looping
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

// trying to add some APIs

const usdAmount = 100;
const exchangeRate = 100;
const impuesto = 0.75;

const arsAmount = usdAmount * exchangeRate * (1 + impuesto);

console.log(
  `${usdAmount} USD = ${arsAmount.toFixed(2)} ARS (including 75% tax)`
);
