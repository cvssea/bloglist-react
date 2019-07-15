import React from 'react';

const Blog = ({
  title,
  author,
  url,
  likes,
  user: { username },
}) => (
  <div className="container">
    <div className="row border rounded my-4 p-2">
      <div className="col-md-9">
        <h4>{title}</h4>
        <p>{url}</p>
        <p>
          user:
          {' '}
          {username}
        </p>
      </div>
      <div className="col-md-3">
        <p>
          Likes:
          {' '}
          {likes}
        </p>
        <p>
          By:
          {' '}
          {author}
        </p>
      </div>
    </div>
  </div>
);

export default Blog;
