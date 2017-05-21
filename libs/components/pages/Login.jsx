/* @flow */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import Page from 'components/atoms/Page';
import Fieldset from 'components/atoms/Fieldset';
import LabeledInput from 'components/molecules/LabeledInput';
import adminTheme from 'themes/admin';
import type { FieldProps } from 'state/forms/types';

export type Props = {
  username: FieldProps<string>,
  password: FieldProps<string>,
};

const Login = ({ username, password }: Props): React$Element<any> => (
  <ThemeProvider theme={adminTheme}>
    <Page centered gradient>
      <Fieldset>
        <LabeledInput label="Username" {...username} />
        <LabeledInput label="Password" type="password" {...password} />
      </Fieldset>
    </Page>
  </ThemeProvider>
);

export default Login;
