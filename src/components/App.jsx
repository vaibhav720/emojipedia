import React from "react";
import Card from "./Card";
import emojiped from "../emojipedia.js";
function CreateCard(emojid) {
  return (
    <Card
      key={emojid.id}
      name={emojid.name}
      meaning={emojid.meaning}
      emoji={emojid.emoji}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojiped.map(CreateCard)}</dl>
    </div>
  );
}

export default App;
