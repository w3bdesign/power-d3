import React, { useEffect } from 'react';

export default function D3Component() {
  useEffect(() => {
    console.log('Render useEffect!');
  }, []);

  return <div className="App">D3!</div>;
}
