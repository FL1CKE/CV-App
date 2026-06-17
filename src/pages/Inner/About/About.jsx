import React from 'react';
import Box from '../../../components/Box/Box';
import { ABOUT_TEXT } from '../../../data';

const About = () => (
  <Box title="About me">
    <p style={{ lineHeight: 1.8 }}>{ABOUT_TEXT}</p>
  </Box>
);

export default About;
