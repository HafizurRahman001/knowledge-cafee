// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Blog.css'
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import Tag from '../Tag/Tag';

const Blog = (props) => {
    const { id, blogName, img, authorName, authorImg, hashTag, duration } = props.blog;
    const handleBookMark = props.handleBookMark;
    const handleMarkAsRead = props.handleMarkAsRead;



    return (
        <div>
            {/* this is card */}
            <div className="card_body_section card">
                <img src={img} className="card-img-top card_img" alt="..." />
                <div className="info">
                    <div className="author_info">
                        <div>
                            <img src={authorImg} alt="" className="img-fluid author_img" />
                        </div>
                        <div className="author_name_date">
                            <h5 >{authorName}</h5>
                            <p style={{ fontSize: '13px', color: 'gray' }}>
                                22 jul 2023
                            </p>
                        </div>
                    </div>
                    <div className="reading_info">
                        <p>{duration} min read</p>
                        <p onClick={() => handleBookMark(id)} style={{ paddingLeft: "20px" }}>
                            <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faBookmark} />
                        </p>
                    </div>
                </div>
                <div className="card-body">
                    <h1 style={{ paddingBottom: '28px' }} className="card-title">{blogName}</h1>
                    <p className="card-text">
                        {
                            hashTag.map((tag, idx) => <Tag key={idx} tag={tag}></Tag>)
                        }
                    </p>
                    <a onClick={() => handleMarkAsRead(id)} href="#stop">Mark as read</a>

                </div>
                <hr />
            </div>
        </div>
    );
};

export default Blog;