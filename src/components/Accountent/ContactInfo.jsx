import React from 'react';

const ContactInfo = ({ phone, email, address }) => (
  <div>
    <p>Phone: {phone}</p>
    <p>Email: {email}</p>
    <p>Address:</p>
    <p>{address}</p>
  </div>
);

export default ContactInfo;
