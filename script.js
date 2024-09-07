// Add event listener to form submission
document
  .getElementById("ratioForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Fetch and parse input values
    const amount = parseFloat(document.getElementById("amount").value);
    const lotSize = parseFloat(document.getElementById("lotsize").value);

    // Validation for valid input values
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    // Calculation for total investment (adding a fixed amount of 60/- as a Groww charge)
    const investValue = amount * lotSize + 60;

    // Calculate stop loss (1x) and target price (3x)
    const sl = amount * (1 / 4);
    const stopLoss = amount - sl;
    const targetPrice = amount + stopLoss;

    // Display the results in the appropriate spans
    document.getElementById("invest").textContent = investValue;
    document.getElementById("sl").textContent = stopLoss;
    document.getElementById("target").textContent = targetPrice;

    // Calculate and display total loss and total profit
    document.getElementById("tl").textContent = `-${sl * lotSize}`;
    document.getElementById("tp").textContent =
      targetPrice * lotSize - investValue;
  });
