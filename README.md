# fetch-api-practice
<div align="center">
    <img src="working-with-api-the-odin-project-assignment-demo-k-belltree-2024.gif" alt="Assignment result demo of Working with API of The Odin Project by Keiko S. 2024" width=60% height=^0%>
</div>

<br>

### First Phase: Understanding APIs with fetch and .then
This browser-based random Giphy Gif display was created to enhance understanding of working with APIs. For more details on this project, please refer to the lesson ["Working with APIs"](https://www.theodinproject.com/lessons/node-path-javascript-working-with-apis#fetching-data) on The Odin Project.

### Second Phase: Enhancing Code with async/await
Transform the code from the first phase to use async and await for better readability and efficiency. For more details on these JavaScript features, refer to the lesson ["Async and Await"](https://www.theodinproject.com/lessons/node-path-javascript-async-and-await) on The Odin Project.

## Key Assignment Instructions

### First Phase (Use fetch and .then): 

- **API Key:**<br>
    Create an account and obtain a free API key from Giphy to display random Gifs in a browser.

- **URL Setting:**<br>
    Use the 'translate' endpoint URL with two parameters: the API key and a search term. Refer to the [Giphy API guide](https://developers.giphy.com/docs/api/endpoint/#translate) for details.
    
    The URL format should be: 
    ```
    https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats`
    ```
- **fetch and .then**<br>
    Use `fetch`, and `.then` methods to locate the exact access point for image data within the JSON, which will be assigned to `img.src`. 

- **Displaying the Image**<br>
    In the subsequent `.then` clause, assign the access point to `img.src`, and verify that the image appears in the browser.

- **Button Function for Showing a New Image**<br>
    Add a button that, when clicked, fetches and displays a new image using the same search term <u>without refreshing the browser</u>.

- **Search Function and .catch**<br>
    Add a search box and incorporate error handling with `.catch`. Note a specific case: when no image is found by the search term, Giphy returns a <u>status 200</u> with an <u>empty array</u>; this won't trigger `.catch` as an error. Adjust the implementation to handle this scenario as an error, displaying an appropriate message or image to users.

### Second Phase (Refactor with async and await):

- **async and await**
    Refactor the existing `fetch` and `.then` functionality using `async` and `await` to make the asynchronous code more readable and easier to manage. This involves modifying function declarations to async and replacing .then with await for handling promises.
    
Note: <br>
- Because the API key should be kept private, it is omitted from the final repository. Instead, a separate module that retrieves the API key has been created.
- The second phase of the project has been developed in a separate branch named `asyncAwait`. 

## Built With

- HTML
- CSS
- JavaScript

