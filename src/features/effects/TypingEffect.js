import React, { useState, useEffect } from 'react';

function TypingEffect({ text = "I Am Michelle!" }) {
    const [index, setIndex] = useState(0); // maintain and update state
    const [currentText, setCurrentText] = useState("");
    const [typing, setTyping] = useState(true); // to differentiate between typing and clearing

    useEffect(() => {
        let timerId;
        if (typing) {
            if (index < text.length) {
                timerId = setTimeout(() => {
                    setCurrentText((prevText) => prevText + text.charAt(index));
                    setIndex((prevIndex) => prevIndex + 1);
                }, 100);
            } else {
                timerId = setTimeout(() => setTyping(false), 1000);
            }
        } else {
            if (index > 0) {
                timerId = setTimeout(() => {
                    setCurrentText(text.substring(0, index - 1));
                    setIndex((prevIndex) => prevIndex - 1);
                }, 50);
            } else {
                timerId = setTimeout(() => {
                    setTyping(true);
                }, 500);
            }
        }
    
        // Clear the timeout when component unmounts or before running the next effect
        return () => clearTimeout(timerId);
    }, [currentText, typing, index,text]);
    // return currentText;
    return "";
    
}

export default TypingEffect;
