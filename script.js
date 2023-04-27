"strict mode";

//Function

function convertToPesoWithTax() {
  const dollarAmount = document.getElementById("Monto").value;
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
