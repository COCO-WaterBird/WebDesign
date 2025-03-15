const apiKey = '1bf17c42e7b26b67d836f4d55833ef37'; // Replace with your actual API key from Fixer.io

const fromCurrencySelect = document.getElementById('from-currency');
const toCurrencySelect = document.getElementById('to-currency');
const amountInput = document.getElementById('amount');
const resultInput = document.getElementById('result');
const convertButton = document.getElementById('convert-btn');

// Fetch currencies and exchange rates from the Fixer.io API
async function fetchCurrencies() {
  try {
    // Correct URL to fetch currency symbols
    const response = await fetch(`http://data.fixer.io/api/symbols?access_key=${apiKey}`);
    const data = await response.json();
    console.log(data); // Log the response to see if data is being fetched

    if (data.success) {
      const currencies = Object.entries(data.symbols); // Convert the symbols object to an array
      currencies.forEach(([currencyCode, currencyName]) => {
        const option1 = document.createElement('option');
        option1.value = currencyCode;
        option1.textContent = `${currencyCode} - ${currencyName}`;
        fromCurrencySelect.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = currencyCode;
        option2.textContent = `${currencyCode} - ${currencyName}`;
        toCurrencySelect.appendChild(option2);
      });
    } else {
      console.error("Failed to fetch currency codes:", data);
    }
  } catch (error) {
    console.error("Error fetching currency codes:", error);
  }
}

// Fetch exchange rates and calculate conversion
async function convertCurrency() {
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;
  const amount = parseFloat(amountInput.value);

  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid amount.');
    return;
  }

  try {
    // Correct URL to fetch exchange rates for the selected base currency (fromCurrency)
    const response = await fetch(`http://data.fixer.io/api/latest?access_key=${apiKey}&base=${fromCurrency}`);
    const data = await response.json();
    console.log(data); // Log the response to ensure rates are being fetched

    if (data.success) {
      const rate = data.rates[toCurrency]; // Get the exchange rate for the selected target currency
      const convertedAmount = (amount * rate).toFixed(2);
      resultInput.value = convertedAmount; // Output the converted amount
    } else {
      console.error("Error fetching conversion rates:", data);
    }
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
  }
}

convertButton.addEventListener('click', convertCurrency);

// Initialize currencies
fetchCurrencies();
