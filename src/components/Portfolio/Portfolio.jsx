import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../../data';
import './Portfolio.scss';

const CATEGORIES = ['all', ...new Set(PORTFOLIO_ITEMS.map((item) => item.category))];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems =
    activeFilter === 'all'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <div className="portfolio">
      <ul className="tabs" role="tablist">
        {CATEGORIES.map((category) => (
          <li
            key={category}
            className={activeFilter === category ? 'active' : ''}
            role="tab"
            aria-selected={activeFilter === category}
          >
            <span onClick={() => setActiveFilter(category)}>{category}</span>
          </li>
        ))}
      </ul>

      <ul className="filter-container">
        {filteredItems.map((item) => (
          <li key={item.id}>
            <img src={item.imageUrl} alt={item.title} />
            <div className="portfolio-info">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a href={item.link}>View project</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
