import React from 'react';

const Section = ({ title, content }) => (
  <div className="section">
    <h2>{title}</h2>
    {content}
  </div>
);

export default Section;
