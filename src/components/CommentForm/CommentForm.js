import React, { useState } from 'react';

const CommentForm = ({ id, addComment }) => {
  const [comment, setComment] = useState('');

  const handleChange = ({ target: { value } }) => {
    setComment(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment({ id, comment });
    setComment('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-10">
          <input
            className="form-control"
            type="text"
            name="comment"
            placeholder="What do you think?"
            value={comment}
            onChange={handleChange}
            minLength="10"
            required
          />
        </div>
        <button className="btn btn-outline-primary ml-auto" type="submit">
          Send
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
