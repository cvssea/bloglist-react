import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Blog from './Blog';
// import blogService from '../services/blogs';

import { initBlogs } from '../reducers/blogs';

const Blogs = ({ blogs, getBlogs }) => {
  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  return (
    <div className="container">
      <h2 className="display-4">Blogs</h2>
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

// const renderBlogs = (toggle = false) => {
//   setSubmitted(true);
//   if (toggle) {
//     blogFormRef.current.toggleVisibility();
//   }
// };
