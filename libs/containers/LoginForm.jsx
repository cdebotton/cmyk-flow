/* @flow */

import { reduxForm } from 'redux-form';
import LoginFormfrom from 'components/organisms/LoginForm';

export default reduxForm({
  form: 'login',
})(LoginFormfrom);
