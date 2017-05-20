/* @flow */

import React from 'react';
import Page from 'components/Page';
import Fieldset from 'components/Fieldset';
import Input from 'components/Input';
import type { FieldProps } from 'state/forms/types';

export type Props = {
  username: FieldProps<string>,
  password: FieldProps<string>,
};

const Login = ({ username, password }: Props): React$Element<any> => (
  <Page centered gradient>
    <Fieldset>
      <Input label="Username" {...username} />
      <Input label="Password" type="password" {...password} />
    </Fieldset>
  </Page>
);

export default Login;
