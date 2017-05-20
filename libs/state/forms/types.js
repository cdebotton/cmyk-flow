/* @flow */

import type { State as LoginState } from './login';

export type Field<T> = {
  value: T,
  isValid: boolean,
  isDirty: boolean,
};

export type FieldProps<T> = {
  onChange: (event: Event & { target: HTMLInputElement }) => void,
} & Field<T>;

export type Form<E: { [formName: string]: Field<*> }> = {
  isSaving: boolean,
  entities: E,
};

type UpdateField<T> = {|
  type: 'forms/UPDATE_FIELD',
  +formName: string,
  +fieldName: string,
  +value: T,
|};

export type Action = UpdateField<*>;

export type State = {
  login: LoginState,
};
