
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
# 3 A social media company, "SocialConnect", wants to implement a feature that allows users to login using their Facebook accounts. The development team has decided to use React Hooks to handle the login functionality. The team wants to create a custom hook called useFacebookLogin that takes in an API endpoint URL as an argument and returns an object with two properties: login and logout. The login property should be a function that makes a POST request to the provided API endpoint URL with the user's Facebook access token. The logout property should be function that clears the user's access token from local storage.

You are tasked with implementing this custom hook using React Hooks. Assume you have already installed the required packages and set up your development environment.

Write the code for the useFacebookLogin custom hook.

// Your code here
Note: You can assume that you have access to the useState and useEffect hooks from React.

```jsx
import React, { useState, useEffect } from "react";

function App() {
  const [token, setToken] = useState(() => localStorage.getItem("fb_token"));
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (token) {
      localStorage.setItem("fb_token", token);
    } else {
      localStorage.removeItem("fb_token");
    }
  }, [token]);

  const login = async () => {
    try {
      // Normally you’ll get fbAccessToken from Facebook SDK
      const fbAccessToken = "dummy_fb_access_token";

      // Simulate API call
      const response = await fetch("/api/facebook-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ access_token: fbAccessToken }),
      });

      if (!response.ok) throw new Error("Login failed");

      const data = await response.json();
      setToken(data.access_token || fbAccessToken);
      setMessage("✅ Logged in successfully!");
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to login");
    }
  };

  const logout = () => {
    setToken(null);
    setMessage("👋 Logged out successfully!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Facebook Login Demo</h2>

      {token ? (
        <>
          <p>🔑 Logged in with token: {token}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p>You are not logged in</p>
          <button onClick={login}>Login with Facebook</button>
        </>
      )}

      {message && <p style={{ marginTop: "20px" }}>{message}</p>}
    </div>
  );
}

export default App;

```
# Write a function that fetches data from 3 fake APIs (simulate with setTimeout). If any API fails, the program should still return results from the others.

```jsx
// Simulated Fake API function
function fetchAPI(apiName, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Random success/failure
      if (Math.random() > 0.3) {
        console.log(`${apiName} ✅ Success`);
        resolve(`${apiName} data`);
      } else {
        console.error(`${apiName} ❌ Failed`);
        reject(`${apiName} failed`);
      }
    }, delay);
  });
}

// Fetch multiple APIs
function fetchAllAPIs() {
  console.log("Fetching data from APIs... please wait ⏳");

  // Map API calls into promises
  const apiPromises = [
    fetchAPI("API 1", 1000),
    fetchAPI("API 2", 1500),
    fetchAPI("API 3", 2000),
  ];

  // Use Promise.allSettled so we always get all results
  return Promise.allSettled(apiPromises)
    .then((results) => {
      const success = results
        .filter((res) => res.status === "fulfilled")
        .map((res) => res.value);

      const failed = results
        .filter((res) => res.status === "rejected")
        .map((res) => res.reason);

      return { success, failed };
    })
    .catch((err) => {
      // This won't usually trigger with allSettled
      console.error("Unexpected error:", err);
      throw err;
    });
}

// Example usage
fetchAllAPIs()
  .then((res) => console.log("Final Results:", res))
  .catch((err) => console.log("Error:", err));

```
# Use Promise.race() with 3 promises: One resolves in 2s, one in 3s, one fails in 1s. Which one is returned? Handle errors gracefully.
```jsx
// Simulated promises
function createPromise(name, delay, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        console.error(`${name} ❌ Failed`);
        reject(`${name} failed`);
      } else {
        console.log(`${name} ✅ Resolved`);
        resolve(`${name} success`);
      }
    }, delay);
  });
}

// Using Promise.race
function runRace() {
  console.log("Starting the race... 🏁");

  const promises = [
    createPromise("P1", 2000),        // resolves in 2s
    createPromise("P2", 3000),        // resolves in 3s
    createPromise("P3", 1000, true),  // fails in 1s
  ];

  return Promise.race(promises)
    .then((result) => {
      console.log("🏆 Race winner:", result);
    })
    .catch((error) => {
      console.log("⚠️ Race ended with error:", error);
    });
}

// Run it
runRace();

```
# Create a function that limits concurrent uploads to 2 images at a time, even if there are 5 images.
```jsx
// Simulated image upload function
function uploadImage(image) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        console.log(`✅ Uploaded: ${image.name}`);
        resolve(`Success: ${image.name}`);
      } else {
        console.error(`❌ Failed: ${image.name}`);
        reject(`Failed: ${image.name}`);
      }
    }, 1000 + Math.random() * 1000); // random delay 1–2s
  });
}

// Upload images with concurrency limit
async function uploadImagesWithLimit(images, limit = 2) {
  const results = [];
  let index = 0;

  // Worker function → uploads next image
  async function worker() {
    while (index < images.length) {
      const currentIndex = index++;
      const image = images[currentIndex];

      try {
        const res = await uploadImage(image);
        results[currentIndex] = res;
      } catch (err) {
        results[currentIndex] = err;
      }
    }
  }

  // Start workers (max = limit)
  const workers = Array.from({ length: limit }, () => worker());
  await Promise.all(workers);

  return results;
}

// Example usage
(async () => {
  const images = [
    { name: "img1.png" },
    { name: "img2.png" },
    { name: "img3.png" },
    { name: "img4.png" },
    { name: "img5.png" }
  ];

  console.log("🚀 Starting uploads with concurrency = 2...");
  const res = await uploadImagesWithLimit(images, 2);
  console.log("✅ Final Results:", res);
})();

```
# Implement a timeout: if a promise takes more than 3 seconds, reject it with "Request timed out"

```jsx
// Timeout wrapper
function withTimeout(promise, ms = 3000) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject("⏰ Request timed out");
    }, ms);

    promise
      .then((res) => {
        clearTimeout(timer);
        resolve(res);
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });
  });
}

// Example: Simulated API
function fakeAPI(name, delay, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(`${name} ❌ Failed`);
      } else {
        resolve(`${name} ✅ Success`);
      }
    }, delay);
  });
}

// Usage
(async () => {
  try {
    const result = await withTimeout(fakeAPI("API 1", 5000), 3000);
    console.log("Result:", result);
  } catch (err) {
    console.error("Error:", err);
  }
})();

```
