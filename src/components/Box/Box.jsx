import React from 'react';
import Info from '../Info/Info';
import './Box.scss';

const Box = ({ title, content, children }) => (
  <section className="info-box">
    {title && <h2>{title}</h2>}
    {content && <Info text={content} />}
    {children}
  </section>
);

export default Box;
