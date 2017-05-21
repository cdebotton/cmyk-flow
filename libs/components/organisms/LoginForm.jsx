/* @flow */

import React from 'react';
import { Field } from 'redux-form';
import Fieldset from 'components/atoms/Fieldset';
import Button from 'components/atoms/Button';
import LabeledInput from 'components/molecules/LabeledInput';
import { required } from 'utils/validations';

type Props = {
  reset: (formName: string) => void,
  pristine: boolean,
  invalid: boolean,
  submitting: boolean,
};

const LoginForm = ({ reset, pristine, submitting, invalid }: Props) => (
  <form onSubmit={(event: Event & { target: HTMLFormElement }) => event.preventDefault()}>
    <Fieldset>
      <Field name="username" label="Username" component={LabeledInput} validate={required} />
      <Field
        name="password"
        type="password"
        label="Password"
        component={LabeledInput}
        validate={required}
        warn={() => 'Warned lol'}
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

export default LoginForm;
