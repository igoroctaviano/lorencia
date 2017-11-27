import React, { Component } from 'react';

const styles = {
  header: {
    display: 'flex',
    border: 2,
    borderColor: 'gray',
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 2px 2px -2px rgba(0,0,0,.15)'
  }
};

class Header extends Component {
  render() {
    return (
      <div style={styles.header}>
        <h1>Lorencia</h1>
      </div>
    );
  }
}

export default Header;
