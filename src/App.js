import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Home from './pages/Home/Home';
import Inner from './pages/Inner/Inner';
import About from './pages/Inner/About/About';
import Education from './pages/Inner/Education/Education';
import Experience from './pages/Inner/Experience/Experience';
import SkillsPage from './pages/Inner/Skills/SkillsPage';
import PortfolioPage from './pages/Inner/Portfolio/PortfolioPage';
import Contacts from './pages/Inner/Contacts/Contacts';
import Feedbacks from './pages/Inner/Feedbacks/Feedbacks';

import './App.scss';

library.add(fas, fab);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inner" element={<Inner />}>
        <Route index element={<Navigate to="about" replace />} />
        <Route path="about" element={<About />} />
        <Route path="education" element={<Education />} />
        <Route path="experience" element={<Experience />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="feedbacks" element={<Feedbacks />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);

export default App;
