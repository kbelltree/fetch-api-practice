import getApiKey from "./private.js";

const img = document.querySelector("img");
const errorMsgContainer = document.querySelector(".error-message");
const apiKey = getApiKey(); 
let currentSearchTerm = "hello";
    
function fetchGifBySearchTerm (searchTerm){
    const apiUrlWithSearchTerm = `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${searchTerm}`
    fetch(apiUrlWithSearchTerm, {mode: 'cors'})
    .then(function (response) {
        if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
        }
        return response.json();
    })
    .then(function (data) {
        if (data.data.length === 0) {
        throw new Error(`No image data found. Data length is ${data.data.length}`);
        }
        img.src = data.data.images.original.url;
    })
    .catch(function (error) {
        console.error(error);
        errorMsgContainer.textContent = `Could not load the Gif. Please try again.`
    })
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