import { connect } from 'react-redux';
import { fetchUsers } from '../../reducers/users';
import Users from './Users';

const mapState = state => ({
  users: state.users,
});

export default connect(
  mapState,
  { fetchUsers },
)(Users);
