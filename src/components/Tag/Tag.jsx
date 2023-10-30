// import React from 'react';
import './Tag.css'

const Tag = (props) => {
    return (
        <span className='tag'>
            <span>#{props.tag}</span>
        </span>
    );
};

export default Tag;