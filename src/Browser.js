import React from 'react';
import Section from './Section';

function Browser() {
  return (
    <div className="browser">
      <Section title="Education" /* other props as needed */ />
      <Section title="Projects" /* other props as needed */ />
      {/* Add more sections as needed */}
    </div>
  );
}

export default Browser;
