import React from 'react';
import { Image, Panel, Well } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Profile = ({
  name, avatarUrl,
  username, date,
}) => (
  <Well>
    <Image src={avatarUrl} rounded />
    <br />
    <Panel>
      <Panel.Heading>
        {name}
      </Panel.Heading>
      <Panel.Body>
        <p>
          {`Username: ${username}`}
        </p>
        <p>
          {`Fecha de nacimiento: ${date.toLocaleDateString()}`}
        </p>
      </Panel.Body>
    </Panel>
  </Well>
);

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};

export default Profile;
