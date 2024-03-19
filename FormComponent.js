

import React, { useState } from 'react';

const FormComponent = () => {
  const [username, setUsername] = useState('');
  const [language, setLanguage] = useState('');
  const [stdin, setStdin] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, language, stdin, code })
      });
      const data = await response.json();
      console.log(data);
      // Clear form fields after submission
      setUsername('');
      setLanguage('');
      setStdin('');
      setCode('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="text" placeholder="Language" value={language} onChange={(e) => setLanguage(e.target.value)} />
      <input type="text" placeholder="Stdin" value={stdin} onChange={(e) => setStdin(e.target.value)} />
      <textarea placeholder="Code" value={code} onChange={(e) => setCode(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
  
};

export default FormComponent;
