import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createBlog } from '../reducers/blogs';

import InputGroup from './InputGroup';

const BlogForm = (props) => {
  const nullBlog = {
    title: '',
    author: '',
    url: '',
  };
  const [blog, setBlog] = useState(nullBlog);

  const handleChange = ({ target: { name, value } }) => {
    setBlog({
      ...blog,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createBlog(blog);
    setBlog(nullBlog);
    props.history.push('/');
  };

  return (
    <div>
      <h4 className="display-4">Add new Blog</h4>
      <form onSubmit={handleSubmit}>
        <InputGroup
          label="Title"
          name="title"
          value={blog.title}
          onChange={handleChange}
          required
        />
        <InputGroup
          label="Author"
          name="author"
          value={blog.author}
          onChange={handleChange}
          required
        />
        <InputGroup
          type="url"
          label="url"
          name="url"
          value={blog.url}
          onChange={handleChange}
          required
        />
        <button className="btn btn-outline-success mr-2" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default withRouter(
  connect(
    null,
    { createBlog },
  )(BlogForm),
);
