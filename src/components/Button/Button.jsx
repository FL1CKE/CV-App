import React from 'react';
import './Button.scss';

const Button = ({ icon, text, onClick }) => (
  <span className="button" onClick={onClick} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onClick?.()}>
    {icon && <span className="button__icon">{icon}</span>}
    {text && <span className="button__text">{text}</span>}
  </span>
);

export default Button;
