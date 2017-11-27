import React, { Component } from 'react';

import Arrow from './Arrow.js';

class ArticleDropdown extends Component {
  render() {
    return (
      <div style={{
        maxWidth: 740,
        paddingRight: 20,
        paddingLeft: 20,
        marginRight: 'auto',
        marginLeft: 'auto'
      }}>
        <div style={{
          borderBottom: '1px solid',
          borderColor: 'rgba(0, 0, 0, .15)',
          color: 'rgba(0, 0, 0, .54)',
          fill: 'rgba(0,0,0,.54)',
          paddingBottom: 10,
          paddingTop: 15
        }}>
          <div style={{ display: 'flex', fontSize: 16 }}>
            <div style={{ flex: '0 0 auto' }}>Your audience:</div>
            <div style={{ flex: '0 0 auto', marginLeft: 5 }}>
              <button style={{
                borderWidth: 0,
                padding: 0,
                background: 'rgba(0,0,0,0)',
                fontSize: 16,
                font: 'inherit',
                color: 'inherit'
              }}>
                <span>All of Lorencia</span>
                <span style={{
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  paddingLeft: 4,
                  paddingRight: 0
                }}><Arrow /></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleDropdown;
