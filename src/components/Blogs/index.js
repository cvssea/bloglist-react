import { connect } from 'react-redux';
import { initBlogs } from '../../reducers/blogs';
import Blogs from './Blogs';

const mapState = ({ blogs }) => ({
  blogs,
});

export default connect(
  mapState,
  { getBlogs: initBlogs },
)(Blogs);
