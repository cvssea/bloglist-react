import { connect } from 'react-redux';
import * as blogActions from '../../reducers/blogs';

import Blog from './Blog';

// const mapDispatch = () => ({
//   deleteBlog(id) {
//     deleteBlog(id);
//   },
//   like(likes, id) {
//     updateLikes(likes, id);
//   },
// });

export default connect(
  null,
  blogActions,
)(Blog);
