import { connect } from 'react-redux';
import { login } from '../../reducers/auth';
import LoginForm from './LoginForm';

export default connect(
  null,
  { login },
)(LoginForm);
