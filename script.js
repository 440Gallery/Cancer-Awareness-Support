const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const quoteError = document.getElementById("quote-error");
const newQuoteBtn = document.getElementById("new-quote-btn");

// Local fallback quotes for when the API is unavailable
const localQuotes = [
  { q: "You are stronger than you think.", a: "Unknown" },
  { q: "Every storm runs out of rain.", a: "Maya Angelou" },
  { q: "The only way out is through.", a: "Robert Frost" },
  { q: "Hope is the thing with feathers that perches in the soul.", a: "Emily Dickinson" },
  { q: "Keep going. You are not alone.", a: "Anonymous" }
];

async function fetchQuote() {
  quoteError.textContent = "";
  quoteText.textContent = "Finding a quote for you…";
  quoteAuthor.textContent = "";

  try {
    const response = await fetch("https://zenquotes.io/api/random");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const quote = data[0]; // array from ZenQuotes

    quoteText.textContent = quote.q || "Stay strong. Keep going.";
    quoteAuthor.textContent = quote.a ? `— ${quote.a}` : "";
  } catch (error) {
    // Fallback to local quote
    const randomQuote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    quoteText.textContent = randomQuote.q;
    quoteAuthor.textContent = randomQuote.a ? `— ${randomQuote.a}` : "";
    quoteError.textContent =
      "Showing a local quote. Check your connection for live updates.";
  }
}

if (newQuoteBtn) {
  newQuoteBtn.addEventListener("click", fetchQuote);
}

window.addEventListener("DOMContentLoaded", fetchQuote);
