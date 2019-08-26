import { connect } from 'react-redux';
import * as blogActions from '../../reducers/blogs';
import Blog from './Blog';

const mapState = (state, { match: { params } }) => {
  if (!state.blogs.length) return {};
  const { id } = params;
  const blog = state.blogs.find(b => b.id === id);
  return { blog };
};

export default connect(
  mapState,
  blogActions,
)(Blog);
