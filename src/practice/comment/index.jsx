import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function Avatar({ author }) {
  return (
    <img
      className="Avatar"
      src={author.avatarUrl}
      alt={author.name}
    />
  );
}

Avatar.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string,
    avatarUrl: PropTypes.string.isRequired,
  }).isRequired,
};

function UserInfo({ author }) {
  return (
    <div className="UserInfo">
      <Avatar author={author} />
      <div className="UserInfo-name">
        {author.name}
      </div>
    </div>
  );
}

UserInfo.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string,
    avatarUrl: PropTypes.string.isRequired,
  }).isRequired,
};
class CommentDate extends React.Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date),
  }

  formatDate = () => {
    const { date } = this.props;
    return date.toDateString();
  }

  render() {
    return (
      <div className="Comment-date">
        {this.formatDate()}
      </div>
    );
  }
}

CommentDate.propTypes = {
  date: PropTypes.instanceOf(Date),
};

CommentDate.defaultProps = {
  date: new Date(),
};

function Comment({ author, date, text }) {
  return (
    <div className="Comment">
      <UserInfo author={author} />
      <div className="Comment-text">
        {text}
      </div>
      <CommentDate date={date} />
    </div>
  );
}

Comment.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string,
    avatarUrl: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.instanceOf(Date),
  text: PropTypes.string,
};

Comment.defaultProps = {
  date: new Date(),
  text: 'default text',
};

const author = {
  name: 'Fede',
  avatarUrl: 'https://imagekit.androidphoria.com/wp-content/uploads/clash-royale-pajaro-simpsons.jpg',
};
ReactDOM.render(<Comment
  author={author}
  date={new Date()}
  text="Esta componente hay que mejorarla"
/>, document.getElementById('root'));
