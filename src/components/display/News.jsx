import React from 'react';
import PropTypes from 'prop-types';

const News = ({ name, image, text }) => (
    <figure>
          {<img src={image}></img> }
          <figcaption>
          {text} - {name}
        </figcaption>
    </figure>
);

News.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };
  
  export default News;
  