/* @flow */

import React from 'react';
import { Field } from 'redux-form';
import Fieldset from 'components/atoms/Fieldset';
import Button from 'components/atoms/Button';
import LabeledInput from 'components/molecules/LabeledInput';

const LoginForm = () => (
  <form onSubmit={event => event.preventDefault()}>
    <Fieldset>
      <Field name="username" label="Username" component={LabeledInput} />
      <Field name="password" type="password" label="Password" component={LabeledInput} />
    </Fieldset>
    <Fieldset align="right">
      <Button type="submit" primary>Go</Button>
      <Button type="reset">Reset</Button>
    </Fieldset>
  </form>
);

export default LoginForm;
