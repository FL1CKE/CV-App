import React from 'react';
import Box from '../../../components/Box/Box';
import TimeLine from '../../../components/TimeLine/TimeLine';
import { TIMELINE_DATA } from '../../../data';

const Education = () => (
  <Box title="Education">
    <TimeLine data={TIMELINE_DATA} />
  </Box>
);

export default Education;
