import React from 'react';
import Info from '../Info/Info';
import './Expertise.scss';

const Expertise = ({ data = [] }) => (
  <ul className="expertise-list">
    {data.map((item, index) => (
      <li key={index}>
        <div className="expertise-list-date">
          <span>{item.date}</span>
        </div>
        <div className="expertise-list-info">
          <h3>{item.info.company}</h3>
          <strong>{item.info.job}</strong>
          <Info text={item.info.description} />
        </div>
      </li>
    ))}
  </ul>
);

export default Expertise;
