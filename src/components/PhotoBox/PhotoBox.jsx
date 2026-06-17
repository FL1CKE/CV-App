import React from 'react';
import './PhotoBox.scss';

const PhotoBox = ({ name, title, description, avatar, compact }) => (
  <figure className={`photo-box ${compact ? 'photo-box--compact' : ''}`}>
    <div className="crop-photo">
      <img src={avatar} alt={name} />
    </div>
    <figcaption>
      <strong>{name}</strong>
      {!compact && (
        <>
          {title && <h5 className="title">{title}</h5>}
          {description && <p>{description}</p>}
        </>
      )}
    </figcaption>
  </figure>
);

export default PhotoBox;
