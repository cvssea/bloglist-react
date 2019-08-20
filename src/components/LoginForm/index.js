import { connect } from 'react-redux';
import { login } from '../../reducers/authReducer';
import LoginForm from './LoginForm';

export default connect(
  null,
  { login },
)(LoginForm);
