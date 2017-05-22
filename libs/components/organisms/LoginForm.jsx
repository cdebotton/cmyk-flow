/* @flow */

import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Fieldset from 'components/atoms/Fieldset';
import Button from 'components/atoms/Button';
import LabeledInput from 'components/molecules/LabeledInput';
import { required } from 'utils/validations';

type LoginHandler = (data: { username: string, password: string }) => void;

type Props = {
  handleSubmit: (callback: LoginHandler) => void,
  onSubmit: LoginHandler,
  reset: (formName: string) => void,
  pristine: boolean,
  invalid: boolean,
  submitting: boolean,
};

const LoginForm = ({ handleSubmit, onSubmit, reset, pristine, submitting, invalid }: Props) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <Fieldset>
      <Field name="username" label="Username" component={LabeledInput} validate={required} />
      <Field
        name="password"
        type="password"
        label="Password"
        component={LabeledInput}
        validate={required}
      />
    </Fieldset>
    <Fieldset align="right">
      <Button type="submit" primary disabled={pristine || invalid || submitting}>Go</Button>
      <Button type="reset" onClick={() => reset('login')} disabled={pristine || submitting}>
        Reset
      </Button>
    </Fieldset>
  </form>
);

export default reduxForm({ form: 'login' })(LoginForm);
