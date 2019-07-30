import React, { useState } from 'react';
import blogService from '../services/blogs';

const Blog = ({
  id,
  title,
  author,
  url,
  likes,
  user: { username },
  renderBlogs,
}) => {
  const [showInfo, setShowInfo] = useState(false);
  const [numLikes, setNumLikes] = useState(likes);

  const updateLikes = async () => {
    await blogService.like(numLikes + 1, id);
    setNumLikes(numLikes + 1);
  };

  let canDelete = false;
  if (localStorage.bloglistUser) {
    const loggedUser = JSON.parse(localStorage.bloglistUser).username;
    canDelete = loggedUser === username;
  }

  const deleteBlog = async () => {
    const isConfirmed = window.confirm(`Remove ${title}?`);
    if (isConfirmed) {
      await blogService.remove(id);
    }
    renderBlogs();
  };

  return (
    <article className="container blog">
      <div className="row border rounded my-4 p-2">
        <div className="col-md-9">
          <h4>{title}</h4>
          {showInfo
            && (
              <>
                <p>{url}</p>
                <p>user: {username}</p>
              </>
            )}
        </div>
        {showInfo
          && (
            <div className="col-md-3 border-left d-flex flex-column align-items-center info-visible">
              <p className="text-center mb-0">{numLikes} likes</p>
              <button
                type="button"
                className="btn btn-sm btn-outline-success"
                onClick={updateLikes}
              >
                Like
              </button>
              <p className="text-center pt-2">by: {author}</p>
            </div>
          )}
        {(showInfo && canDelete)
          && (
            <button
              type="button"
              className="btn btn-sm btn-outline-danger"
              onClick={deleteBlog}
            >
              Delete
            </button>
          )}
        <button
          type="button"
          className="btn btn-primary ml-auto"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? 'Hide' : 'Show'}
        </button>
      </div>
    </article>
  );
};

Blog.defaultProps = {
  renderBlogs: () => console.log('rendering blogs'),
};

export default Blog;
