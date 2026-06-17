import React from 'react';
import Box from '../../../components/Box/Box';
import Address from '../../../components/Address/Address';
import { CONTACTS } from '../../../data';

const Contacts = () => (
  <Box title="Contacts">
    <Address
      phone={CONTACTS.phone}
      email={CONTACTS.email}
      twitter={CONTACTS.twitter}
      facebook={CONTACTS.facebook}
      skype={CONTACTS.skype}
    />
  </Box>
);

export default Contacts;
