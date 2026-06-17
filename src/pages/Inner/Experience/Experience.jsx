import React from 'react';
import Box from '../../../components/Box/Box';
import Expertise from '../../../components/Expertise/Expertise';
import { EXPERTISE_DATA } from '../../../data';

const Experience = () => (
  <Box title="Experience">
    <Expertise data={EXPERTISE_DATA} />
  </Box>
);

export default Experience;
