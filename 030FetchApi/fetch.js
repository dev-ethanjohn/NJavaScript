// Logging the fetch function
console.log(fetch); //? [Function: fetch]
// Why does it log a regular function instead of an async function?
// - `fetch` is an API function provided by the browser (or Node.js with `node-fetch`).
// - It returns a Promise that resolves once the request completes.
// - It is not marked as `async` in its definition because it inherently returns a Promise.

// Fetching a webpage (HTML document)
// When we request a URL, we are typically fetching an HTML page.
// By default, `fetch` does not assume anything about the response format.
// We must explicitly tell it what to do with the response.

// -----------------------------------------------
// USING A PROMISE (Thenable Pattern)
// -----------------------------------------------
const response = fetch("https://wallhaven.cc/");

// Console log the response object (It logs a Promise)
console.log(response); // Promise { <pending> }

response
  .then((result) => {
    // `result` is a Response object containing metadata about the request
    // such as status code, headers, and response body.

    console.log(result.url); // The requested URL
    console.log(result.status); // HTTP status code (e.g., 200 OK, 404 Not Found)
    console.log(result.ok); // Boolean indicating success (status 200-299)
    console.log(result.headers); // Headers object containing response headers

    // The response body must be processed explicitly (text, JSON, blob, etc.)
    return result.text(); // Reads response as raw text (HTML in this case)
  })
  .then((html) => {
    console.log(html); // Logs the HTML content of the webpage
  })
  .catch((error) => {
    console.error("Fetch error:", error); // Handle network errors
  });

// -----------------------------------------------
// USING ASYNC/AWAIT (More Readable Approach)
// -----------------------------------------------
const fetchData = async () => {
  try {
    const result = await fetch("https://wallhaven.cc/");
    const html = await result.text();
    console.log(html); // Logs HTML content
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

// Invoke function
fetchData();

// -----------------------------------------------
// RESPONSE DATA TYPES
// -----------------------------------------------
// `fetch` provides multiple ways to parse response data:
//* 1️⃣ JSON (result.json()) - Parses response as JSON
//* 2️⃣ Text (result.text()) - Reads response as a string
//* 3️⃣ Blob (result.blob()) - Reads response as a binary object
// 4️⃣ Form Data (result.formData()) - Parses response as FormData object
// 5️⃣ ArrayBuffer (result.arrayBuffer()) - Reads response as a raw binary buffer

// Example fetching JSON data
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => res.json()) // Convert response to JSON
  .then((data) => console.log(data)); // Logs JSON object

// -----------------------------------------------
// REQUEST HEADERS
// -----------------------------------------------
// We can provide additional options like headers to customize requests
fetch("https://wallhaven.cc/", {
  method: "GET", // HTTP method (GET, POST, PUT, DELETE, etc.)
  headers: {
    "Content-Type": "application/json", // Tells the server we're sending JSON
    Authorization: "Bearer YOUR_API_KEY", // Example authentication header
  },
});
