import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Blog from './Blog/Blog';
import Toggle from './Toggle';
import BlogForm from './BlogForm';
// import blogService from '../services/blogs';

import { initBlogs } from '../reducers/blogsReducer';

const Blogs = ({ blogs, setMessage, getBlogs }) => {
  const blogFormRef = React.createRef();

  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  // const renderBlogs = (toggle = false) => {
  //   setSubmitted(true);
  //   if (toggle) {
  //     blogFormRef.current.toggleVisibility();
  //   }
  // };

  return (
    <div className="container">
      <h2 className="display-2">Blogs</h2>
      <Toggle btnLabel="Add Blog" ref={blogFormRef}>
        <BlogForm setMessage={setMessage} />
      </Toggle>
      {blogs
        .sort((a, b) => b.likes - a.likes)
        .map(b => (
          <Blog key={b.id} {...b} />
        ))}
    </div>
  );
};

const mapStateToProps = ({ blogs }) => ({
  blogs,
});

export default connect(
  mapStateToProps,
  { getBlogs: initBlogs },
)(Blogs);
