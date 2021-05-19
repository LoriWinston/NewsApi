import React from 'react';
import PropTypes from 'prop-types';

const News = ({ name, image, text, url }) => {
  return  (
    <div>
       <p>
          {text} - {name}
           </p> 
           <img src={image} style={{height:'50px'}}></img>
           <a href={url}>{name}</a>
           </div>
           )
};

News.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };
  
  export default News;
  