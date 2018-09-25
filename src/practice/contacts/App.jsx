import React from 'react';
import Loadable from 'react-loadable';
// import Header from './Header';
// import Profiles from './Profiles';
import './index.css';

const Profiles = Loadable({
  loader: () => import('./Profiles'),
  loading: () => <div>Loading...</div>,
});

const Header = Loadable({
  loader: () => import('./Header'),
  loading: () => <div>Loading...</div>,
});

export default class App extends React.Component {
  state = {
    users: null,
    filteredUsers: null,
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=8')
      .then(res => res.json())
      .then(({ results }) => this.setState({ users: results }));
  }

  onChange = (name) => {
    const { users } = this.state;
    const filteredUsers = users.filter(user => user.name.first.includes(name));
    this.setState({ filteredUsers });
  };

  render() {
    const { users, filteredUsers } = this.state;
    return (
      <div className="App">
        <Header onChange={this.onChange} />
        <Profiles users={filteredUsers || users} />
      </div>
    );
  }
}
