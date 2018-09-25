import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Profile from './Profile';
import withLoading from './loading.hoc';

const Profiles = ({ users }) => {
  const profiles = users.map(
    user => (
      <Col
        sm={6}
        md={4}
        lg={3}
        key={user.login.username}
      >
        <Profile
          name={`${user.name.first} ${user.name.last}`}
          username={user.login.username}
          avatarUrl={user.picture.large}
          date={new Date(user.registered.date)}
        />
      </Col>
    ),
  );
  return (
    <Grid className="App-intro">
      <br />
      <Row>
        {profiles}
      </Row>
    </Grid>
  );
};

Profiles.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.shape({
        first: PropTypes.string,
        last: PropTypes.string,
      }),
      login: PropTypes.shape({
        username: PropTypes.string,
      }),
      picture: PropTypes.shape({
        medium: PropTypes.string,
      }),
      registered: PropTypes.shape({
        date: PropTypes.string,
      }),
    }),
  ).isRequired,
};

export default withLoading(Profiles, 'users');
