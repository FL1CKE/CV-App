import React from 'react';
import Box from '../../../components/Box/Box';
import Feedback from '../../../components/Feedback/Feedback';
import { FEEDBACK_DATA } from '../../../data';

const Feedbacks = () => (
  <Box title="Feedbacks">
    <Feedback data={FEEDBACK_DATA} />
  </Box>
);

export default Feedbacks;
