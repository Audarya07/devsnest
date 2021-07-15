const QUOTE_URL = "https://api.quotable.io/random";
const quoteContainer = document.querySelector(".quote-container");
const quote = document.querySelector(".quote");

async function getQuote(){
    quote.innerHTML = "";
    const quoteData = await fetch(QUOTE_URL);
    const data = await quoteData.json();
        
    const author = document.createElement("h3");
    author.innerHTML = data.author;
    
    const quoteText = document.createElement("div");
    quoteText.classList.add("text");
    quoteText.innerHTML = data.content;
    
    quote.appendChild(author);
    quote.appendChild(quoteText);
    quoteContainer.appendChild(quote);
}

getQuote();

function copyDivToClipboard() {
    var range = document.createRange();
    range.selectNode(document.querySelector(".text"));
    window.getSelection().removeAllRanges(); 
    window.getSelection().addRange(range); 
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Quote is Copied");
}
const nextBtn = document.getElementById("next");
nextBtn.addEventListener("click", getQuote);
