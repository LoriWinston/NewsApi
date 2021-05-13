import React from 'react';
import PropTypes from 'prop-types';
import News from './News';

const NewsList = ({ newsProp }) => (
    <ul aria-label="news">
        {newsProp.map((news) => (
            <li key={`${news.title}-${news.author}`}>
                <News name={news.title} image={news.url} text={news.title} />
                <img src={news.urlToImage} style={{height:'50px'}}></img>
                <a href={news.url}>{news.title}</a>
            </li>
        ))}
    </ul>
);

NewsList.propTypes = {
    newsProp: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        urlToImage: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
  
  export default NewsList;
  
  