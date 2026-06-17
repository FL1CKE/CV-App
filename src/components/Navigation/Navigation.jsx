import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faGraduationCap,
  faBriefcase,
  faHeart,
  faFolder,
  faEnvelope,
  faComments,
} from '@fortawesome/free-solid-svg-icons';
import './Navigation.scss';

const NAV_ITEMS = [
  { path: '/inner/about', label: 'About me', icon: faUser },
  { path: '/inner/education', label: 'Education', icon: faGraduationCap },
  { path: '/inner/experience', label: 'Experience', icon: faBriefcase },
  { path: '/inner/skills', label: 'Skills', icon: faHeart },
  { path: '/inner/portfolio', label: 'Portfolio', icon: faFolder },
  { path: '/inner/contacts', label: 'Contacts', icon: faEnvelope },
  { path: '/inner/feedbacks', label: 'Feedbacks', icon: faComments },
];

const Navigation = () => (
  <nav className="navigation">
    <ul>
      {NAV_ITEMS.map(({ path, label, icon }) => (
        <li key={path}>
          <NavLink to={path} className={({ isActive }) => (isActive ? 'active' : '')}>
            <span className="icon">
              <FontAwesomeIcon icon={icon} />
            </span>
            <span>{label}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
