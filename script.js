"strict mode";

// Values

const btnConvertir = document.querySelector(".btnConvert");
const total = document.querySelector(".impTotal");

// Function (for money convertion)

function convertToPesoWithTax() {
  const dollarAmount = document.getElementById("dolar-amount").value;
  const apiUrl = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const usdBuyRate = parseFloat(
        data.find((casa) => casa.casa.nombre === "Dolar Oficial").casa.venta
      );
      const pesoAmount = dollarAmount * (usdBuyRate * 1.6);
      document.getElementById(
        "peso-amount"
      ).innerHTML = `ARS ${pesoAmount.toFixed(2)}`;
    })
    .catch((error) => {
      console.error(error);
      document.getElementById("peso-amount").innerHTML =
        "Error: Configurando Js.";
    });
}

// Hide Element (it do show the result when btn clicked)
document.getElementById("impTotal").style.display = "none";

btnConvertir.addEventListener("click", function () {
  impTotal.style.display = "block";
});

// console.log(impTotal);

// DOM click (called function)
document.getElementById("calculate").onclick = function () {
  convertToPesoWithTax();
};

// Overshadow on btnConvertir
btnConvertir.addEventListener("mouseover", function () {
  this.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
});

btnConvertir.addEventListener("mouseout", function () {
  this.style.backgroundColor = "#85a4a279";
});

// console.log(btnConvertir);
