import React from 'react';
import PropTypes from 'prop-types';
import ebook from '../images/ebook-example.jpg';
import '../styles/Profile.scss';

function Profile(props) {
  const avatar = props.avatar === '' ? ebook : props.avatar;
  return (
    <div className="profile">
      <div
        className="profile__avatar"
        style={{ backgroundImage: `url(${avatar})` }}
      ></div>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Profile;
