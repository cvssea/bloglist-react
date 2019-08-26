import React from 'react';

const Blog = ({
  id, title, author, url, likes, user: { username }, updateLikes, deleteBlog,
}) => {
  let canDelete = false;
  if (window.localStorage.bloglistUser) {
    const loggedUser = JSON.parse(localStorage.bloglistUser).username;
    canDelete = loggedUser === username;
  }

  const onDelete = () => {
    const isConfirmed = window.confirm(`Remove ${title}?`);
    if (isConfirmed) {
      deleteBlog(id);
    }
  };

  return (
    <article className="container blog">
      <div className="row border rounded my-4 p-2">
        <div className="col-md-9">
          <h4>{title}</h4>
          <p>{url}</p>
          <p>user: {username}</p>
        </div>
        <div className="col-md-3 border-left d-flex flex-column align-items-center info-visible">
          <p className="text-center mb-0">{likes} likes</p>
          <button
            type="button"
            className="btn btn-sm btn-outline-success"
            onClick={() => updateLikes(likes, id)}
          >
            Like
          </button>
          <p className="text-center pt-2">by: {author}</p>
        </div>

        {canDelete && (
          <button type="button" className="btn btn-sm btn-outline-danger" onClick={onDelete}>
            Delete
          </button>
        )}
      </div>
    </article>
  );
};

export default Blog;
