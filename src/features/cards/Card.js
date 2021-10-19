import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCards } from "./cardsSlice";
import ReactCardFlip from "react-card-flip";

export default function Card({ id }) {
  const cards = useSelector(selectCards);
  const card = cards[id];
  const [flipped, setFlipped] = useState(false);

  return (
    <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
      <div>
        <button className="card" onClick={(e) => setFlipped(!flipped)}>
          {card.front}
        </button>
      </div>

      <div>
        <button className="card" onClick={(e) => setFlipped(!flipped)}>
          {card.back}
        </button>
      </div>
    </ReactCardFlip>
  );
}
