import React, { useState } from "react";

function SNcapicua() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const checkCapicua = () => {
    const cleanedText = text.replace(/[\W_]/g, "").toLowerCase();
    const isCapicua = cleanedText === cleanedText.split("").reverse().join("");
    setResult(isCapicua ? "Es capicúa" : "No es capicúa");
  };

  return (
    <div>
      <h2>Sera Capicua?</h2>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        placeholder="Digita tu palabra" 
      />
      <button onClick={checkCapicua}>lo averiguaremos</button>
      <p>{result}</p>
    </div>
  );
}

export default SNcapicua;
