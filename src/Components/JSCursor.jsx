// App.js

import React, { useRef } from "react";
import "../App.css";

const JSCursor = () => {
  const emojiElements = useRef([]);

  const emojis = ["💗","💓","💝","💕","💘","💖","😊"];

  const handleMouseDown = (index) => {
    emojiElements.current[index].style.transition = "none";
  };

  const handleMouseUp = (index) => {
    emojiElements.current[index].style.transition =
      "transform 0.2s ease-in-out";
  };

  const handleMouseLeave = (index) => {
    emojiElements.current[index].style.transition =
      "transform 0.2s ease-in-out";
  };

  const handleMouseMove = (event, index) => {
    const offsetX = 20 * (index + 1);
    const offsetY = 20 * (index + 1);
    emojiElements.current[index].style.transform = `translate(${
      event.clientX - offsetX
    }px, ${event.clientY - offsetY}px)`;
  };

  return (
    <div className=" absolute z-20">
      {emojis.map((emoji, index) => (
        <div
          key={index}
          className="animated-emoji"
          ref={(el) => (emojiElements.current[index] = el)}
          onMouseDown={() => handleMouseDown(index)}
          onMouseUp={() => handleMouseUp(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          onMouseMove={(event) => handleMouseMove(event, index)}
        >
          {emoji}
        </div>
      ))}
    </div>
  );
};

export default JSCursor;
