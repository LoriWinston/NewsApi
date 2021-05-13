import React from 'react';
import PropTypes from 'prop-types';


const Controls = ({ newsName, onNameChange, onSubmit }) => (
    <form onSubmit={onSubmit}>
        <label htmlFor="news-name">Search News</label>
        <input
        id="news-name"
        type="text"
        value={newsName}
        onChange={onNameChange}
        />
        <button aria-label="find-news">Submit</button>
    </form>
);

Controls.propTypes = {
    newsName: PropTypes.string.isRequired,
    onNameChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};


export default Controls;