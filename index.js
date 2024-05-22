import getApiKey from "./private.js";

const img = document.querySelector("img");
const errorMsgContainer = document.querySelector(".error-message");
const apiKey = getApiKey(); 
let currentSearchTerm = "hello";
    
async function fetchGifBySearchTerm (searchTerm){
    try {
        const apiUrlWithSearchTerm = `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${searchTerm}`
        const response = await fetch(apiUrlWithSearchTerm, {mode: 'cors'});
            if (!response.ok) {
             throw new Error(`Error: ${response.status}`);
            }
        const data = await response.json();
            if (data.data.length === 0) {
                throw new Error(`No image data found. Data length is ${data.data.length}`);
            }
        img.src = data.data.images.original.url;
    } catch (error){
        console.error(error);
        errorMsgContainer.textContent = `Could not load the Gif. Please try again.`;
    }
}

function clearErrorMsgContainer() {
    errorMsgContainer.textContent = "";
}

const anotherGifBtn = document.getElementById("another-gif");
anotherGifBtn.addEventListener("click", () => {
    fetchGifBySearchTerm(currentSearchTerm);
})

const searchGifBtn = document.getElementById("search-gif");
searchGifBtn.addEventListener("click", () => {
    const inputValue = document.getElementById("search").value;
    currentSearchTerm = inputValue; 
    clearErrorMsgContainer();
    fetchGifBySearchTerm(currentSearchTerm);
})

// First loading default
fetchGifBySearchTerm(currentSearchTerm);