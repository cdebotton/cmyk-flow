/* @flow */

import type { Field, Form } from 'state/forms/types';

export const createField = <T>(value: T): Field<T> => ({
  value,
  isValid: true,
  isDirty: false,
});

export const createForm = <E: { [formName: string]: Field<*> }>(entities: E): Form<E> => ({
  isSaving: false,
  entities,
});
