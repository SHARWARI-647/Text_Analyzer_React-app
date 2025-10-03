import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TextForm = (props) => {
  const [text, setText] = useState("Enter text here");
  const [speechText, setSpeechText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

 
  const [searchResults, setSearchResults] = useState('');


const removeSpecialCharsAndNumbers=()=>{
  const newText = text.replace(/[^a-zA-Z]/g, '');
  setText(newText);
  alert("Removed the special characters and numbers");
}

  const handleCopy = () => {
  navigator.clipboard.writeText(text);
  //setText(newText);
  alert("Text copied to clipboard");
};

const handleRemoveSpaces = () => {
  const newText = text.replace(/\s+/g, ' ').trim();
  setText(newText);
  alert("Extra spaces removed");
};

const handleClearClick = () => {
  setText('');
  alert("Text cleared");
};


  const handleUpperClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    alert("Uppercase done");
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    alert("Lowercase done");
  };

  const handleCapitalizedClick = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
    alert("Capitalized done");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleSpeak = () => {
    if (isSpeaking) return;
    setIsSpeaking(true);
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    speech.rate = 1;
    speech.volume = 1;
    speech.onend = () => {
      setIsSpeaking(false);
    };
    window.speechSynthesis.speak(speech);
  };
const handleListen = () => {
  if (isListening) return;
  setIsListening(true);
  if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
    alert("Speech Recognition API is not supported in this browser.");
    setIsListening(false);
    return;
  }
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.maxResults = 10;
  recognition.onresult = (event) => {
    setSpeechText(event.results[0][0].transcript);
    setIsListening(false);
  };
  recognition.onerror = () => {
    setIsListening(false);
  };
  recognition.start();
};
  const handleSearch = () => {
    const results = text.toLowerCase().includes(searchTerm.toLowerCase()) ? text : 'No results found';
    setSearchResults(results);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };


  return (
    <div  className='container'>
      <h1>{props.heading}</h1>
      <div className="form">
        <label htmlFor="text">TypeCase Conversion</label><br /><br />
       
        <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search in text..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>

   <textarea cols="30" rows="8" id="textbox" onChange={handleOnChange} value={text}></textarea><br />
        <button className='btn' onClick={handleUpperClick}>Convert to uppercase</button>
        <button className='btn' onClick={handleLowerClick}>Convert to lowercase</button>
        <button className='btn' onClick={handleCopy}>Copy</button>
        <button className='btn' onClick={handleCapitalizedClick}>Capitalized first letter</button><br></br><br></br>
        <button className='btn' onClick={handleSpeak}>Speak</button>
        <button className='btn' onClick={handleListen}>Listen</button>
         <button className='btn' onClick={handleClearClick}>Clear</button>
        <button className='btn' onClick={handleRemoveSpaces}>Remove spaces</button>
        <button className='btn' onClick={removeSpecialCharsAndNumbers}>Remove special chars and nums</button>

      </div>
      <div className="dsec">
       <div className="summary">
        <h3>Text Summary</h3>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
      </div>
      <div className="preview">
         <h3>Text Preview</h3>
         <p>{text}</p>
      </div>
      <div className="speech">
        <p>Speech Text: {speechText}</p>
      </div>
      </div>
     
    </div>
  );
};

/*const TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};*/

export default TextForm;

