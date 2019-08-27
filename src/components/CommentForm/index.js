import { connect } from 'react-redux';
import { addComment } from '../../reducers/blogs';
import CommentForm from './CommentForm';

export default connect(
  null,
  { addComment },
)(CommentForm);
