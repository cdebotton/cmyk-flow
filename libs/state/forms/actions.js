/* @flow */

import type { Action } from 'state/types';

export const UPDATE_FIELD = 'forms/UPDATE_FIELD';

export const updateField = <T>(formName: string, fieldName: string, value: T): Action => ({
  type: UPDATE_FIELD,
  formName,
  fieldName,
  value,
});
