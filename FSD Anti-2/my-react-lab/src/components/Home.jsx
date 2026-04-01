import React from 'react';

function Home() {
  return (
    <div>
      <div className="alert-box">
        <strong>Lab Task:</strong> Click the buttons above. Notice how the URL changes without the page refreshing.
      </div>
      
      <hr />
      
      <div className="recap-section">
        <h3>Quick Concept Recap:</h3>
        <ul>
          <li><strong>BrowserRouter:</strong> Keeps your UI in sync with the URL.</li>
          <li><strong>Routes & Route:</strong> Map a specific path (like /about) to a component.</li>
          <li><strong>Link:</strong> Used instead of &lt;a&gt; tags to prevent full page reloads.</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
