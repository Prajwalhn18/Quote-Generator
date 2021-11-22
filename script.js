const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes = [];

// Get quotes from API

function newQuote(apiQuotes) {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
    quoteText.textContent = quote.text;
    authorText.textContent = '-'+ quote.author;

}

async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    const apiQuotes = await response.json();
    newQuote(apiQuotes);
  } catch (error) {
    console.log("error");
  }
}

function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} ${authorText.textContent}`;
    window.open(twitterUrl,'_blank');
}

//event listeners

newQuoteBtn.addEventListener('click', getQuotes);
twitterBtn.addEventListener('click',tweetQuote);

getQuotes();