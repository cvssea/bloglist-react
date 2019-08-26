import React, { useEffect } from 'react';
import Spinner from '../Spinner';

const Blog = ({
  blog, updateLikes, deleteBlog, initBlogs, history,
}) => {
  useEffect(() => {
    initBlogs();
  }, [initBlogs]);

  if (!blog) return <Spinner />;

  let canDelete = false;
  if (window.localStorage.bloglistUser) {
    const loggedUser = JSON.parse(localStorage.bloglistUser).username;
    canDelete = loggedUser === blog.user.username;
  }

  const onDelete = () => {
    const isConfirmed = window.confirm(`Remove ${blog.title}?`);
    if (isConfirmed) {
      deleteBlog(blog.id);
      // temporary solution for rendering <Blogs /> without the deleted <Blog />
      setTimeout(() => history.push('/'), 500);
    }
  };

  return (
    <article>
      <div className="jumbotron mt-3">
        <h2 className="display-4">{blog.title}</h2>
        <p className="lead">
          <strong>{blog.author}</strong>
        </p>
        <hr className="my-4" />

        <p>
          Added by <strong>{blog.user.name}</strong>
        </p>
        <p className="lead">
          <span>Read </span>
          <a href={blog.url} target="_blank" rel="noopener noreferrer">
            {blog.url}
          </a>
        </p>
        <p>
          <button
            className="btn btn-primary btn-lg"
            onClick={() => updateLikes(blog.likes, blog.id)}
          >
            Like <span className="badge badge-light">{blog.likes}</span>
          </button>
        </p>
      </div>
      {canDelete && (
        <button className="btn btn-sm btn-danger" onClick={() => onDelete(blog.id)}>
          Delete
        </button>
      )}
    </article>
  );
};

export default Blog;
