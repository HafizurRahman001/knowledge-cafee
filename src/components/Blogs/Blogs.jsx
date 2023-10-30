// import React from 'react';

// import { ToastContainer, Zoom, toast } from 'react-toastify';
import { Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Blog from '../Blog/Blog';
import NameOfArticles from '../NameOfArticles/NameOfArticles';
import './Blogs.css'
import { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [totalTime, setTotalTime] = useState(0);
    const [articles, setArticles] = useState([]);

    // react toast for showing message
    // const notify = () => toast("Already added to Bookmark!");

    useEffect(() => {
        fetch('fakedb.json')
            .then(response => response.json())
            .then(data => setBlogs(data))
    }, []);


    const handleBookMark = (id) => {
        const searchObj = blogs.find(blog => blog.id == id)
        const totalDuration = totalTime + searchObj.duration;
        setTotalTime(totalDuration)
    }
    const handleMarkAsRead = (id) => {
        const findObj = blogs.find(blog => blog.id == id);
        if (articles.includes(findObj.blogName)) {
            //handle the error
            // way: 01 --> by using <ToastContainer/> and notify function 
            // notify()
            // return < ToastContainer/>

            // way: 02 --> by usiing style property 
            toast.warn('❌ Already added!', {
                position: "top-center",
                transition: Zoom,
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        } else {
            const newArr = [...articles, findObj.blogName];
            setArticles(newArr)
        }
    }
    // console.log(articles)

    return (
        <div>
            <div className="row">
                <div className="col-md-8">
                    {
                        blogs.map(blog => <Blog
                            key={blog.id}
                            blog={blog}
                            handleBookMark={handleBookMark}
                            handleMarkAsRead={handleMarkAsRead}
                        />)
                    }
                </div>

                {/* sidebar navigation */}
                <div className="col-md-4">
                    <div className="side_bar_nav sticky-top">
                        <div className="side_bar_section">
                            <div className="total_reading_time">
                                <h4>Spent time on read: {totalTime} min</h4>
                            </div>
                            <div className="mark_as_read_article">
                                <h5>Bookmarked Blogs: {articles.length}</h5>
                                {
                                    articles.map((article, idx) => <NameOfArticles
                                        key={idx}
                                        article={article}
                                    />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;