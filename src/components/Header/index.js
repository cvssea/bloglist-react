import { connect } from 'react-redux';
import { logout } from '../../reducers/auth';
import Header from './Header';

export default connect(
  null,
  { logout },
)(Header);
