import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import QuoteList from "./components/QuoteList";
import QuoteDetails from "./components/QuoteDetails";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define your routes using the Route component */}
        <Route path="/" exact component={QuoteList} />
        <Route path="/quotes/:id" component={QuoteDetails} />
      </div>
    </Router>
  );
}

export default App;
