import React from 'react';
import Info from '../Info/Info';
import './TimeLine.scss';

const TimeLine = ({ data = [] }) => (
  <div className="timeline">
    <ul className="timeline-list">
      {data.map((item, index) => (
        <li key={index}>
          <time className="timeline-date" dateTime={String(item.date)}>
            {item.date}
          </time>
          <div className="timeline-event">
            <Info>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Info>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default TimeLine;
