import { connect } from 'react-redux';
import { fetchUsers } from '../../reducers/users';
import User from './User';

const mapState = (state, ownProps) => {
  if (!state.users.length) return {};
  const { id } = ownProps.match.params;
  const user = state.users.find(u => u.id === id);
  return {
    name: user.name,
    blogs: user.blogs,
  };
};

export default connect(mapState, { fetchUsers })(User);