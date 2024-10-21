const translations = {
    "hello": "hola",
    "goodbye": "adiós",
    "please": "por favor",
    "thank you": "gracias",
    "yes": "sí",
    "no": "no",
    // Add more words or phrases as needed
};

document.getElementById('translateButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    const targetLanguage = document.getElementById('languageSelect').value;

    let translatedText = '';

    if (targetLanguage === 'es') { // Spanish translation
        const words = inputText.split(' ');
        translatedText = words.map(word => translations[word] || word).join(' ');
    } else {
        translatedText = 'Translation not available for this language.';
    }

    document.getElementById('outputArea').innerText = translatedText;
});
