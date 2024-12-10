function extractHashtags(text) {
    let hashtags = text.match(/#[A-Za-z0-9_]+/g);
    return hashtags || [];
}

function convertToLowerCase(text) {
    return text.convertToLowerCase();
}

function countWords(text) {
    let words = text.split(" ");
    return words.length;
}

let sampleText = "Check out this #awesome post! #javascript #coding";
console.log("Sample Text:", sampleText);

let hashtags = extractHashtags(sampleText);
console.log("Extracted hashtags:", hashtags);

let lowercaseText = convertToLowerCase(sampleText);
console.log("Lowercase text:", lowercaseText);

let wordCount = countWords(sampleText);
console.log("Word count:", wordCount);