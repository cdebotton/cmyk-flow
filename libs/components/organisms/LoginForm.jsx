/* @flow */

import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Fieldset from 'components/atoms/Fieldset';
import Button from 'components/atoms/Button';
import LabeledInput from 'components/molecules/LabeledInput';
import Badge from 'components/atoms/Badge';
import { required } from 'services/validations';

type LoginHandler = (data: { username: string, password: string }) => void;

type Props = {
  loginError: ?string,
  handleSubmit: (callback: LoginHandler) => void,
  onSubmit: LoginHandler,
  reset: (formName: string) => void,
  pristine: boolean,
  invalid: boolean,
  submitting: boolean,
};

const LoginForm = ({
  loginError,
  handleSubmit,
  onSubmit,
  reset,
  pristine,
  submitting,
  invalid,
}: Props) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <Fieldset>
      <Field name="username" label="Username" component={LabeledInput} validate={required} />
      <Field
        autoComplete="new-password"
        name="password"
        type="password"
        label="Password"
        component={LabeledInput}
        validate={required}
      />
    </Fieldset>
    <Fieldset align="right">
      {loginError && <Badge error>{loginError}</Badge>}
      <Button type="submit" primary disabled={pristine || invalid || submitting}>Go</Button>
      <Button type="reset" onClick={() => reset('login')} disabled={pristine || submitting}>
        Reset
      </Button>
    </Fieldset>
  </form>
);

export default reduxForm({ form: 'login' })(LoginForm);
