"strict mode";

// Values

const btnConvertir = document.querySelector(".btnConvert");
const total = document.querySelector(".impTotal");

// Function (for money convertion)

function convertToPesoWithTax() {
  const dollarAmount = parseFloat(
    document.getElementById("dolar-amount").value
  );
  const apiUrl = "https://dolarapi.com/v1/dolares/blue";

  // Money amount fetching and multiplying
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const blueSellPrice = data && data.venta ? parseFloat(data.venta) : null;

      if (blueSellPrice) {
        const pesoAmount = dollarAmount * blueSellPrice;
        document.getElementById(
          "peso-amount"
        ).innerHTML = `ARS ${pesoAmount.toFixed(2)}`;
      } else {
        throw new Error("Could not retrieve the exchange rate.");
      }
    })

    .catch((error) => {
      console.error("Error fetching data or calculating amount:", error);
      document.getElementById("peso-amount").innerHTML =
        "Error: Please try again.";
    });
}

// Hide Element (it do show the result when btn clicked)
document.getElementById("impTotal").style.display = "none";

btnConvertir.addEventListener("click", function () {
  impTotal.style.display = "block";
});

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

