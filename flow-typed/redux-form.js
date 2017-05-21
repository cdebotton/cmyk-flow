/* @flow */

import { StatelessComponent } from 'react-redux';

declare module 'redux-form' {
  declare type FormProps = {
    form: string,
  };

  declare function reduxForm<OP, P, ST, DF, CX>(
    props: FormProps,
  ): (component: React$Component<DF, OP & P, ST> | StatelessComponent<OP & P, CX>) => Function;

  declare function reducer<S, A>(state: S, action: A): S;

  declare type FieldProps = {
    component: string | ((...props: Array<any>) => React$Element<*>),
  };

  declare function Field(props: FieldProps): React$Element<*>;

  declare type InputProps = {
    input: {
      value: any,
      onKeyPress: (event: Event & { target: HTMLInputElement }) => void,
      onKeyDown: (event: Event & { target: HTMLInputElement }) => void,
      onKeyUp: (event: Event & { target: HTMLInputElement }) => void,
      onChange: (event: Event & { target: HTMLInputElement }) => void,
      onBlur: (event: Event & { target: HTMLInputElement }) => void,
      onFocus: (event: Event & { target: HTMLInputElement }) => void,
    },
    meta: {
      error: string,
      touched: boolean,
      pristine: boolean,
    },
  };
}
