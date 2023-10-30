// import React from 'react';
import './NameOfArticles.css'

const NameOfArticles = (props) => {
    const { article } = props
    return (
        <div>
            <div className="name_of_article">
                <h5 style={{ fontWeight: 'bold' }}>{article}</h5>
            </div>
        </div>
    );
};

export default NameOfArticles;