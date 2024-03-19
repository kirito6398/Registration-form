

import React, { useState, useEffect } from 'react';

const Page2 = () => {
  const [codeSnippets, setCodeSnippets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/snippets');
        const data = await response.json();
        setCodeSnippets(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Submitted Code Snippets</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Language</th>
            <th>Stdin</th>
            <th>Code Preview</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {codeSnippets.map((snippet, index) => (
            <tr key={index}>
              <td>{snippet.username}</td>
              <td>{snippet.language}</td>
              <td>{snippet.stdin}</td>
              <td>{snippet.code_preview}</td>
              <td>{snippet.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page2;
