const form = document.getElementById('calculator-form');
const totalAmountInput = document.getElementById('total-amount');
const piCoinValueInput = document.getElementById('pi-coin-value');
const piCoinNeededSpan = document.getElementById('pi-coin-needed');
const resultModal = document.getElementById('result-modal');
const closeModalButton = document.getElementById('close-modal');

// Function to display the result modal
function showResultModal(piCoinsNeeded) {
  piCoinNeededSpan.textContent = piCoinsNeeded.toFixed(4); // Format to four decimal places
  resultModal.style.display = 'block';
}

// Function to hide the result modal
function closeResultModal() {
  resultModal.style.display = 'none';
}

// Event listener attached to the form submission:
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Clear any previous error message
  totalAmountInput.classList.remove('error');
  piCoinValueInput.classList.remove('error');

  // Basic error handling:
  const totalAmount = parseFloat(totalAmountInput.value);
  const piCoinValue = parseFloat(piCoinValueInput.value);

  let hasError = false;

  if (isNaN(totalAmount) || isNaN(piCoinValue)) {
    totalAmountInput.classList.add('error');
    piCoinValueInput.classList.add('error');
    hasError = true;
  }

  if (totalAmount <= 0 || piCoinValue <= 0) {
    totalAmountInput.classList.add('error');
    piCoinValueInput.classList.add('error');
    hasError = true;
  }

  if (hasError) {
    // Display an error message (optional)
    return; // Exit the function if there's an error
  }

  // Simplified calculation logic:
  const piCoinsNeeded = totalAmount / piCoinValue;

  // Display the result in the modal
  showResultModal(piCoinsNeeded);
});

// Close modal button click event listener
closeModalButton.addEventListener('click', closeResultModal);
