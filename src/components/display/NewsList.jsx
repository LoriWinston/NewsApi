import React from 'react';
import PropTypes from 'prop-types';
import News from './News';

const NewsList = ({ newsProp }) => (
    <ul aria-label="news">
        {newsProp.map((news) => (
            <li key={`${news.title}-${news.author}`}>
                <News name={news.title} image={news.urlToImage} text={news.title} url={news.url} />
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
  
  