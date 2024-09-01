/*
document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const text = e.target.result;
            console.log("File content loaded:", text);  // Debugging log

            const processedText = processText(text);
            console.log("Processed text:", processedText);  // Debugging log

            document.getElementById('processedText').textContent = processedText;
        };
        
        reader.onerror = function(e) {
            console.error("File could not be read:", e);  // Debugging log
        };
        
        reader.readAsText(file);
    } else {
        console.error("No file selected");  // Debugging log
    }
});

function processText(text) {
    if (!text) {
        console.error("No text to process");  // Debugging log
        return "";
    }

    const words = text.split(/\s+/);
    console.log("Words split:", words);  // Debugging log
    
    const wordCount = {};

    // Count occurrences of each word
    words.forEach(word => {
        const lowerCaseWord = word.toLowerCase();
        wordCount[lowerCaseWord] = (wordCount[lowerCaseWord] || 0) + 1;
    });

    console.log("Word count:", wordCount);  // Debugging log

    // Find the most used word
    let mostUsedWord = '';
    let maxCount = 0;

    for (const word in wordCount) {
        if (wordCount[word] > maxCount) {
            mostUsedWord = word;
            maxCount = wordCount[word];
        }
    }

    console.log("Most used word:", mostUsedWord);  // Debugging log

    // Surround the most used word with "foo" and "bar"
    const processedText = words.map(word => {
        if (word.toLowerCase() === mostUsedWord) {
            return `foo${word}bar`;
        }
        return word;
    }).join(' ');

    console.log("Final processed text:", processedText);  // Debugging log
    return processedText;

}
*/

document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const text = e.target.result;
            console.log("File content loaded:", text);  // Debugging log

            const processedText = processText(text);
            console.log("Processed text:", processedText);  // Debugging log

            document.getElementById('processedText').textContent = processedText;
        };
        
        reader.onerror = function(e) {
            console.error("File could not be read:", e);  // Debugging log
        };
        
        reader.readAsText(file);
    } else {
        console.error("No file selected");  // Debugging log
    }
});

function processText(text) {
    if (!text) {
        console.error("No text to process");  // Debugging log
        return "";
    }

    const words = text.split(/\s+/);
    console.log("Words split:", words);  // Debugging log
    
    const wordCount = {};

    // Count occurrences of each word
    words.forEach(word => {
        const lowerCaseWord = word.toLowerCase();
        wordCount[lowerCaseWord] = (wordCount[lowerCaseWord] || 0) + 1;
    });

    console.log("Word count:", wordCount);  // Debugging log

    // Find the most used word
    let mostUsedWord = '';
    let maxCount = 0;

    for (const word in wordCount) {
        if (wordCount[word] > maxCount) {
            mostUsedWord = word;
            maxCount = wordCount[word];
        }
    }

    console.log("Most used word:", mostUsedWord);  // Debugging log

    // Surround the most used word with "foo" and "bar"
    const processedText = words.map(word => {
        if (word.toLowerCase() === mostUsedWord) {
            return `foo${word}bar`;
        }
        return word;
    }).join(' ');

    console.log("Final processed text:", processedText);  // Debugging log
    return processedText;
}
