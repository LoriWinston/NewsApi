import React from 'react';
import PropTypes from 'prop-types';


const Controls = ({ newsName, onNewsNameChange, onSubmit }) => (
    <form onSubmit={onSubmit}>
        <label htmlFor="news-name">Search News</label>
        <input
        id="news-name"
        type="text"
        value={newsName}
        onChange={onNewsNameChange}
        />
        <button aria-label="find-news">Submit</button>
    </form>
);

Controls.propTypes = {
    newsName: PropTypes.string.isRequired,
    onNewsNameChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};


export default Controls;