
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


