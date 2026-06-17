import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faSkype } from '@fortawesome/free-brands-svg-icons';
import './Address.scss';

const Address = ({ phone, email, twitter, facebook, skype }) => (
  <address className="address">
    {phone && (
      <dl>
        <dt><FontAwesomeIcon icon={faPhone} /></dt>
        <dd><a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a></dd>
      </dl>
    )}
    {email && (
      <dl>
        <dt><FontAwesomeIcon icon={faEnvelope} /></dt>
        <dd><a href={`mailto:${email}`}>{email}</a></dd>
      </dl>
    )}
    {twitter && (
      <dl>
        <dt><FontAwesomeIcon icon={faTwitter} /></dt>
        <dd><a href={twitter} target="_blank" rel="noopener noreferrer">{twitter}</a></dd>
      </dl>
    )}
    {facebook && (
      <dl>
        <dt><FontAwesomeIcon icon={faFacebook} /></dt>
        <dd><a href={facebook} target="_blank" rel="noopener noreferrer">{facebook}</a></dd>
      </dl>
    )}
    {skype && (
      <dl>
        <dt><FontAwesomeIcon icon={faSkype} /></dt>
        <dd><a href={`skype:${skype}?call`}>{skype}</a></dd>
      </dl>
    )}
  </address>
);

export default Address;
