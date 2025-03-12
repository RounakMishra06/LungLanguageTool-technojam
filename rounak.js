const translations = {
    "hello": "नमस्ते",
    "goodbye": "अलविदा",
    "please": "कृपया",
    "thank you": "धन्यवाद",
    "yes": "हाँ",
    "no": "नहीं",
    "morning": "सुबह",
    "night": "रात",
    "food": "भोजन",
    "water": "पानी",
    "how are you": "आप कैसे हैं?",
};

document.getElementById('translateButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    
    // Remove punctuation to improve accuracy
    const cleanedText = inputText.replace(/[^\w\s]/g, "");

    const words = cleanedText.split(' ');
    let translatedText = words.map(word => translations[word] || word).join(' ');

    document.getElementById('outputArea').innerText = translatedText;
});
