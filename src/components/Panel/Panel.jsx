import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Navigation from '../Navigation/Navigation';
import PhotoBox from '../PhotoBox/PhotoBox';
import Button from '../Button/Button';
import { USER } from '../../data';
import './Panel.scss';

const Panel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => setIsOpen((prev) => !prev);

  return (
    <aside className={`panel ${isOpen ? 'open' : ''}`}>
      <div className="panel__photo-box photo-box">
        <PhotoBox
          name={USER.name}
          avatar={USER.avatar}
          compact
        />
      </div>

      <Navigation />

      <div className="button-slider" onClick={togglePanel} role="button" aria-label="Toggle menu" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && togglePanel()}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </div>

      <Button
        icon={<FontAwesomeIcon icon={faChevronLeft} />}
        text="Go back"
        onClick={() => window.history.back()}
      />
    </aside>
  );
};

export default Panel;
