import React from 'react';
import Box from '../../../components/Box/Box';
import Skills from '../../../components/Skills/Skills';
import { SKILLS_DATA } from '../../../data';

const SkillsPage = () => (
  <Box>
    <Skills data={SKILLS_DATA} />
  </Box>
);

export default SkillsPage;
