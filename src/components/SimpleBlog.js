import React from 'react';

const SimpleBlog = ({ blog, onClick }) => (
  <div className="simple-blog">
    <div>
      {blog.title} {blog.author}
    </div>
    <div>
      blog has {blog.likes} likes
      <button onClick={onClick}>like</button>
    </div>
  </div>
);

SimpleBlog.defaultProps = {
  onClick: () => console.log('click'),
};

export default SimpleBlog;
