# Text Analyzer React App

A simple **Text Analyzer** built with **React** that allows users to perform various text transformations, search within the text, and use text-to-speech and speech-to-text features.

## Features

### Text Transformations

* Convert text to **uppercase**.
* Convert text to **lowercase**.
* **Capitalize** the first letter of the text.
* Remove **extra spaces**.
* Remove **special characters and numbers**.
* **Clear** text.
* **Copy** text to clipboard.

### Speech Features

* **Speak text** aloud using `SpeechSynthesis`.
* **Listen to speech** and convert it to text using `SpeechRecognition`.

### Search Functionality

* Search for a keyword within the text.
* Displays search results in real-time.

### Text Summary

* Word count and character count.
* Estimated reading time.

### Text Preview

* Real-time preview of the text after transformations.

## Screenshots

<img src="Screenshots\Screenshot (26).png" width="800" height="800">

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/text-analyzer.git
```

2. Navigate to the project folder:

```bash
cd text-analyzer
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open your browser at [http://localhost:3000](http://localhost:3000) to see the app.

## Usage

1. Enter text in the **textarea**.
2. Use the buttons to **transform or manipulate** the text.
3. Use the **search bar** to find specific words.
4. Click **Speak** to hear the text aloud.
5. Click **Listen** to convert your speech into text.
6. Check the **Text Summary** and **Preview** sections for details.


## Project Structure
'''bash
text-analyzer/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   └── TextForm.js
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── package.json
└── README.md
'''
## Dependencies

* React
* PropTypes (optional for prop type validation)

## Author
**Sharwari Rahangdale**

