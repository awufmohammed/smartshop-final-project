
// Mortgage Calculator
// Based on the input, calculate, output
// structure of corrected DEBUG01-03.

// START
document.getElementById("mortgageForm")
  .addEventListener("submit", function(event) {
    event.preventDefault();
    calculateMortgage();
  });

function calculateMortgage() {

  // INPUT
  let loan = Number(
    document.getElementById("loan").value
  );

  let annualRate = Number(
    document.getElementById("rate").value
  );

  let years = Number(
    document.getElementById("years").value
  );

  let result = document.getElementById("result");

  // Validate the inputs
  if (
    !Number.isFinite(loan) ||
    !Number.isFinite(annualRate) ||
    !Number.isInteger(years) ||
    loan <= 0 ||
    annualRate < 0 ||
    years <= 0
  ) {
    result.textContent = "Please enter valid values.";
    return;
  }

  // CALCULATE
  let monthlyRate = annualRate / 100 / 12;
  let numberOfPayments = years * 12;
  let monthlyPayment;

  if (monthlyRate === 0) {
    monthlyPayment = loan / numberOfPayments;
  } else {
    let factor = Math.pow(
      1 + monthlyRate,
      numberOfPayments
    );

    monthlyPayment =
      loan * monthlyRate * factor / (factor - 1);
  }

  // OUTPUT
  result.textContent =
    "Monthly Payment: $" +
    monthlyPayment.toFixed(2);

  // STOP
}
