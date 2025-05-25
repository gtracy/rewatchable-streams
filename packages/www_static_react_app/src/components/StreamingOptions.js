import React from 'react';

function StreamingOptions({ options }) {
  if (!options || options.length === 0) {
    return <p className="status-message">No streaming options available.</p>;
  }

  return (
    <div className="streaming-options-container">
      <h3>Streaming Options:</h3>
      <ul className="streaming-options-list">
        {options.map((option, index) => (
          <li key={index} className="list-item">
            <span>{option.service}:</span> <a href={option.link} target="_blank" rel="noopener noreferrer">{option.link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StreamingOptions;
