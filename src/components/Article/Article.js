import React, { Component } from 'react';

import Editor from '../Editor/Editor';
import Header from '../Header';
import ArticleHeader from './ArticleHeader';
import ArticleDropdown from './ArticleDropdown/ArticleDropdown';

class Article extends Component {
  render() {
    return (
      <div style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
        <Header />
        <ArticleDropdown />
        <ArticleHeader />
        <Editor />
      </div>
    );
  }
}

export default Article;
