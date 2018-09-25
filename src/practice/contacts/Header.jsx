import React from 'react';
import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import logo from '../../logo.svg';

export default class Header extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  }

  state = {
    search: '',
  };

  handleChange = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const { target: { value: search } } = event;
    const { onChange } = this.props;
    onChange(search);
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Row>
          <input className="search-input" placeholder="Find usere " type="text" value={search} onChange={this.handleChange} />
        </Row>
      </header>
    );
  }
}
