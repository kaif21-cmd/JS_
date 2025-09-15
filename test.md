
# You are a developer at a social media company jo users ko posts create aur share karne deta hai. Company ek feature implement karna chahti hai jisme users apne posts ka font style customize kar sakein. Tum React Developer ho aur tumhe ek JavaScript function likhna hai jo 3 parameters lega: fontSize, fontFamily, aur text. fontSize ek number hoga jo font ka size pixels me represent karega. fontFamily ek string hoga jo font family ka naam hoga (e.g., "Arial", "Times New Roman"). text ek string hoga jo formatted text represent karega.Function ko ek HTML string return karni hai jo formatted text show kare.
# Example:
# Agar function ko call karein fontSize = 24, fontFamily = "Arial", aur text = "Hello World!" ke saath, to output hoga:

```jsx
function formatText(fontSize, fontFamily, text) {
  return `<span style="font-size: ${fontSize}px; font-family: ${fontFamily};">${text}</span>`;
}

// Example usage:
const result = formatText(24, "Arial", "Hello World!");
console.log(result);
// Output: <span style="font-size: 24px; font-family: Arial;">Hello World!</span>

```
# using react
```jsx
import React, { useState } from "react";

const App = () => {
  const [useString, setString] = useState(null);

  const showString = () => {
    setString(
      <span style={{ fontSize: "24px", fontFamily: "Arial" }}>
        Hello World!
      </span>
    );
  };

  return (
    <div>
      <button onClick={showString}>Click</button>
      <div>{useString}</div>
    </div>
  );
};

export default App;

```
# 2 :
# A social media platform "SocialConnect" ek feature implement karna chahta hai jisme users ek sath multiple images upload kar saken. Platform frontend development ke liye JavaScript use karta hai. Development team yeh ensure karna chahti hai ki images asynchronously upload ho taki UI freeze na ho. Saath hi, ek loading indicator dikhna chahiye jab tak saari images successfully upload na ho jayein. 
# Tumhe ek JavaScript function uploadImages implement karna hai jo ek array of image blobs as argument lega aur ek promise return karega jo tab resolve hoga jab saari images successfully upload ho jayengi. Function ko asynchronous programming with promises use karke banana hai.

```jsx
function uploadImage(image) {
  // API call to upload image
  return new Promise((resolve, reject) => {
    // implementation
  });
}

function uploadImages(images) {
  // implementation
}

```
```jsx
// Simulated single image upload function
function uploadImage(image) {
  return new Promise((resolve, reject) => {
    // Simulate async API call with setTimeout
    setTimeout(() => {
      // Randomly fail or succeed
      if (Math.random() > 0.1) {
        console.log(`Uploaded image: ${image.name}`);
        resolve(`Success: ${image.name}`);
      } else {
        reject(`Failed to upload: ${image.name}`);
      }
    }, 1000);
  });
}

// Upload multiple images
function uploadImages(images) {
  console.log("Uploading images... please wait ⏳");

  // Map each image to an upload promise
  const uploadPromises = images.map((img) => uploadImage(img));

  // Wait for all uploads to finish
  return Promise.all(uploadPromises)
    .then((results) => {
      console.log("✅ All images uploaded successfully!");
      return results;
    })
    .catch((error) => {
      console.error("❌ Some image failed:", error);
      throw error;
    });
}

// Example usage:
const images = [
  { name: "img1.png" },
  { name: "img2.png" },
  { name: "img3.png" }
];

uploadImages(images)
  .then((res) => console.log("Results:", res))
  .catch((err) => console.log("Error:", err));

```
# Full working Image Uploader feature using react

```jsx
import React, { useState } from "react";

// Simulated single image upload function
function uploadImage(image) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Randomly fail or succeed
      if (Math.random() > 0.1) {
        console.log(`Uploaded image: ${image.name}`);
        resolve(`✅ Success: ${image.name}`);
      } else {
        reject(`❌ Failed to upload: ${image.name}`);
      }
    }, 1000);
  });
}

function App() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  // Handle file selection
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
    setResults([]); // clear old results
  };

  // Upload multiple images
  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      alert("Please select some images first!");
      return;
    }

    setLoading(true);
    try {
      const uploadPromises = selectedFiles.map((file) => uploadImage(file));
      const res = await Promise.all(uploadPromises);
      setResults(res);
    } catch (err) {
      setResults([err]); // show error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📤 SocialConnect Image Uploader</h2>

      {/* File Input */}
      <input type="file" multiple accept="image/*" onChange={handleFileChange} />

      {/* Upload Button */}
      <button onClick={handleUpload} style={{ marginLeft: "10px" }}>
        Upload
      </button>

      {/* Preview Selected Images */}
      {selectedFiles.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Preview:</h3>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {selectedFiles.map((file, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "8px" }}
                />
                <p style={{ fontSize: "12px" }}>{file.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Loading Indicator */}
      {loading && <p>Uploading images... ⏳</p>}

      {/* Results */}
      {results.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Upload Results:</h3>
          <ul>
            {results.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;

```

