import React from 'react';
import Info from '../Info/Info';
import './Feedback.scss';

const Feedback = ({ data = [] }) => (
  <ul className="feedback">
    {data.map((item, index) => (
      <li key={index}>
        <Info text={item.feedback} />
        <footer className="feedback-reporter">
          <div className="feedback-reporter-photo">
            <img src={item.reporter.photoUrl} alt={item.reporter.name} />
          </div>
          <address>
            <a href={item.reporter.citeUrl} target="_blank" rel="noopener noreferrer">
              {item.reporter.name}
            </a>
          </address>
        </footer>
      </li>
    ))}
  </ul>
);

export default Feedback;
