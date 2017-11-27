import React, { Component } from 'react';

const styles = {
  container: {
    paddingTop: 35,
    paddingRight: 20,
    paddingLeft: 20,
    marginRight: 'auto',
    marginLeft: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  flex: {
    display: 'flex',
  },
  flexItem: {
    flex: '0 0 auto'
  },
  profileImage: {
    width: '60px',
    height: '60px',
    borderRadius: '100%',
    cursor: 'pointer'
  },
  caption: {
    color: 'rgba(0, 0, 0, .54)'
  }
};

class ArticleHeader extends Component {
  render() {
    return (
      <header style={styles.container}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={styles.flexItem}>
            <a href="">
              <img style={styles.profileImage} src="https://cdn-images-1.medium.com/fit/c/60/60/1*g9GzfG2F5KsEVwwIjvBHQA.jpeg" alt="" />
            </a>
          </div>
          <div style={{ flex: '0 0 auto', paddingLeft: 15 }}>
            <div style={styles.profileName}>
              <a style={{ 
                textDecoration: 'none', 
                color: 'black', 
                fontWeight: 'bold' }} href="">Igor Octaviano</a>
            </div>
            <div style={styles.caption}>
              Coder, guitar player, learner, podcast addict and sometimes a MMORPG enthusiast!?
            </div>
            <div style={styles.caption}>
              Draft
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default ArticleHeader;
