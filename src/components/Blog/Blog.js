import React from 'react';
import { connect } from 'react-redux';
import { updateLikes } from '../../reducers/blogs';
import blogService from '../../services/blogs';

const Blog = ({
  id, title, author, url, likes, user: { username }, like,
}) => {
  let canDelete = false;
  if (window.localStorage.bloglistUser) {
    const loggedUser = JSON.parse(localStorage.bloglistUser).username;
    canDelete = loggedUser === username;
  }

  const deleteBlog = async () => {
    const isConfirmed = window.confirm(`Remove ${title}?`);
    if (isConfirmed) {
      await blogService.remove(id);
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
            onClick={() => like(likes, id)}
          >
            Like
          </button>
          <p className="text-center pt-2">by: {author}</p>
        </div>

        {canDelete && (
          <button type="button" className="btn btn-sm btn-outline-danger" onClick={deleteBlog}>
            Delete
          </button>
        )}
      </div>
    </article>
  );
};

export default connect(
  null,
  { like: updateLikes },
)(Blog);
