import React, { useState, useEffect } from "react";

function QuoteDetails({ quoteId }) {
  const [quote, setQuote] = useState({});
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
     fetch(`/quotes/${quoteId}`).then((response) => response.json()).then((data) => setQuote(data));
     fetch(`/quotes/${quoteId}/pictures`).then((response) => response.json()).then((data) => setPictures(data));
  }, [quoteId]);

  return (
    <div>
      <h2>{quote.title}</h2>
      <p>{quote.description}</p>
      <h3>Pictures</h3>
      <ul>
        {pictures.map((picture) => (
          <li key={picture.id}>{picture.caption}</li>
        ))}
      </ul>
    </div>
  );
}

export default QuoteDetails;
