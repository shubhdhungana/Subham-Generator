// script.js
const quotes = {
  sports: [
    {
      text: "You miss 100% of the shots you don’t take.",
      author: "Wayne Gretzky",
    },
    {
      text: "Winners never quit, and quitters never win.",
      author: "Vince Lombardi",
    },
  ],
  movies: [
    { text: "May the Force be with you.", author: "Star Wars" },
    { text: "There's no place like home.", author: "The Wizard of Oz" },
  ],
  life: [
    {
      text: "In the end, we only regret the chances we didn’t take.",
      author: "Unknown",
    },
    {
      text: "Life is what happens when you’re busy making other plans.",
      author: "John Lennon",
    },
  ],
  religious: [
    {
      text: "God helps those who help themselves.",
      author: "Benjamin Franklin",
    },
    {
      text: "The purpose of life is a life of purpose.",
      author: "Robert Byrne",
    },
  ],
};

let currentCategory = "sports";
let currentIndex = 0;
let fontSize = 1.5;

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const categorySelect = document.getElementById("category-select");
const btnIncreaseFont = document.getElementById("btn-increase-font");
const btnDecreaseFont = document.getElementById("btn-decrease-font");

function displayQuote(index) {
  const categoryQuotes = quotes[currentCategory];
  const quote = categoryQuotes[index];
  quoteText.textContent = `"${quote.text}"`;
  quoteAuthor.textContent = `- ${quote.author}`;
}

document.getElementById("btn-next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % quotes[currentCategory].length;
  displayQuote(currentIndex);
});

document.getElementById("btn-prev").addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + quotes[currentCategory].length) %
    quotes[currentCategory].length;
  displayQuote(currentIndex);
});

document.getElementById("btn-random").addEventListener("click", () => {
  currentIndex = Math.floor(Math.random() * quotes[currentCategory].length);
  displayQuote(currentIndex);
});

categorySelect.addEventListener("change", (event) => {
  currentCategory = event.target.value;
  currentIndex = 0;
  displayQuote(currentIndex);
});

btnIncreaseFont.addEventListener("click", () => {
  fontSize += 0.1;
  quoteText.style.fontSize = `${fontSize}rem`;
});

btnDecreaseFont.addEventListener("click", () => {
  fontSize -= 0.1;
  quoteText.style.fontSize = `${fontSize}rem`;
});

// Initial display
displayQuote(currentIndex);
