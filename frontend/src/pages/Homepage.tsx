import React, { useState } from "react";
import "./HomePage.css";

const HomePage: React.FC = () => {
  const [prompt, setPrompt] = useState("");

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Prompt submitted:", prompt);
    // Later, you'll connect this to your image generation API
  };

  return (
    <div className="home-container">
      <div className="title">
        <h1>V I S U R A </h1>
        
      </div>

      <form className="prompt-bar" onSubmit={handleGenerate}>
        <input
          type="text"
          placeholder="Enter your prompt here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          required
        />
        <button type="submit">Generate</button>
      </form>
    </div>
  );
};

export default HomePage;
