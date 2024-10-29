// fetch(apiUrl)
//   .then((response) => response.json())
//   .then((data) => {
//     const blueSellPrice = parseFloat(
//       data.find((casa) => casa.casa.nombre === "Blue").casa.venta
//     );
//     const pesoAmount = blueSellPrice;
//     document.getElementById(
//       "peso-amount"
//     ).innerHTML = `ARS ${pesoAmount.toFixed(2)}`;
//   })
//   .catch((error) => {
//     console.error(error);
//     document.getElementById("peso-amount").innerHTML =
//       "Error: Configurando Js.";
//   });
