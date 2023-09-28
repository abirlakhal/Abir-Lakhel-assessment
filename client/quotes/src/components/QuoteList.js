import React, { useState, useEffect } from "react";

function QuoteList() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("/quotes").then((response) => response.json()).then((data) => setQuotes(data));
  }, []);

  return (
    <div>
      <h1>Quotes</h1>
      <ul>
        {quotes.map((quote) => (
          <li key={quote.id}>{quote.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default QuoteList;
