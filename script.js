"strict mode";

// Values

const btnConvertir = document.querySelector(".btnConvert");

// Function

function convertToPesoWithTax() {
  const dollarAmount = document.getElementById("monto").value;
  const apiUrl = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const usdBuyRate = parseFloat(
        data.find((casa) => casa.casa.nombre === "Dolar Oficial").casa.venta
      );
      const pesoAmount = dollarAmount * (usdBuyRate * 1.75);
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

//Esconder luego mostrar resultado
document.getElementById("impTotal").style.display = "none";
// document.getElementById("each").style.display = "none";

//DOM click que callea la function
document.getElementById("calculate").onclick = function () {
  convertToPesoWithTax();
};

//Overshadow en btnConvertir
btnConvertir.addEventListener("mouseover", function () {
  this.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
});
btnConvertir.addEventListener("blur", function () {
  this.style.backgroundColor = "#000";
});

btnConvertir.addEventListener("mouseout", function () {
  this.style.backgroundColor = "#85a4a279";
});

// console.log(btnConvertir);
