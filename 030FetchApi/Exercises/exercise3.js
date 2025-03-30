/*
    1. Install node-fetch if your Node version is less than 18
       using NPM, and import it in to your file (ES Module style)
    2. Import "fs" from "fs/promises" which is built-in to NodeJS
       (Doesn't need an NPM install)

    3. Go to "wallhaven.cc" and find a wallpaper you like. Visit the
       wallpaper's page and right click the wallpaper and "open image
       in new tab" to you have just the image in a tab. The URL should
       end with .png or .jpg.
       Eg: https://w.wallhaven.cc/full/7p/wallhaven-7p39gy.png
    4. Use fetch to get this image, and parse it correctly. Then,
       use "fs" to write a file to your filesystem with the actual
       image itself so you can open it after you run the script.
       Note that these functions in fs return Promises.

    * This is purposefully challenging and will require lots of
      Googling to see how to parse the image and save it using Node.
*/

import fs from "fs/promises";

const downloadImage = async (url, filepath) => {
  try {
    // Fetch the image
    const response = await fetch(url);

    // Check if the request was successful
    if (!response.ok) {
      throw new Error(
        `Failed to fetch image: ${response.status} ${response.statusText}`
      );
    }

    // Convert response into a buffer
    const buffer = await response.arrayBuffer();

    // Write the file to the filesystem
    await fs.writeFile(filepath, Buffer.from(buffer));
    console.log(`Image saved to ${filepath}`);
  } catch (error) {
    console.error("Error downloading image:", error);
  }
};

const imageUrl = "https://w.wallhaven.cc/full/7p/wallhaven-7p39gy.png";
const savePath = "wallpaper.png";

downloadImage(imageUrl, savePath);

// For Node.js → ArrayBuffer is better.

// If you're saving an image in Node.js, ArrayBuffer (buffer) is the best choice since Blob isn't natively supported in Node. But if you're working in the browser, Blob is more convenient because it integrates well with <img>, downloads, and file uploads.

// 💡 Final Verdict:
// ✔ If you're fetching an image in the browser → Use Blob
// ✔ If you're handling binary data in Node.js → Use ArrayBuffer

//* USING BLOB
//// Function to download and save an image
// const downloadImage = async (url, outputPath) => {
//   try {
//     console.log("Fetching image...");
//     const response = await fetch(url);
//     if (!response.ok)
//       throw new Error(`Failed to fetch: ${response.statusText}`);

//     // Convert response to Blob
//     const blob = await response.blob();

//     // Read the Blob as a Buffer
//     const arrayBuffer = await blob.arrayBuffer();
//     const buffer = Buffer.from(arrayBuffer);

//     // Write to file
//     await fs.writeFile(outputPath, buffer);
//     console.log("Image downloaded successfully!");
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

// // Define the image URL and output path
// const imageUrl = "https://w.wallhaven.cc/full/7p/wallhaven-7p39gy.png";
// const outputFilePath = "wallpaper.png";

// downloadImage(imageUrl, outputFilePath);
