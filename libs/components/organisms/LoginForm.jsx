/* @flow */

import React from 'react';
import { Field } from 'redux-form';
import Fieldset from 'components/atoms/Fieldset';
import Button from 'components/atoms/Button';
import LabeledInput from 'components/molecules/LabeledInput';

type Props = {
  reset: (formName: string) => void,
};

const LoginForm = ({ reset }: Props) => (
  <form onSubmit={(event: Event & { target: HTMLFormElement }) => event.preventDefault()}>
    <Fieldset>
      <Field name="username" label="Username" component={LabeledInput} />
      <Field name="password" type="password" label="Password" component={LabeledInput} />
    </Fieldset>
    <Fieldset align="right">
      <Button type="submit" primary>Go</Button>
      <Button type="reset" onClick={() => reset('login')}>Reset</Button>
    </Fieldset>
  </form>
);

export default LoginForm;
