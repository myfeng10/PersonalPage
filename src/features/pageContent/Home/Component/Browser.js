import React from 'react';
import Section from './Section';

function Browser() {
  return (
    <div className="browser scrollable-container">
      <Section title="Education">
        <p>Boston University</p>
        <h3>Courses</h3>
        <ul>
          <li>CS330 Algorithm</li>
          <li>CS357 Cyber Security</li>
          <li>CS356 Intro To DataScience</li>
        </ul>
      </Section>
      <Section title="Projects">
        <ul>
          <li>placeholder</li>
          <li>placeholder</li>
          <li>placeholder</li>
        </ul>
      </Section>
      <Section title="Skills">
        <ul>
          <li>placeholder</li>
          <li>placeholder</li>
          <li>placeholder</li>
        </ul>
      </Section>
    </div>
  );
}

export default Browser;
