/* @flow */

import { createForm, createField } from 'state/forms/utils';
import { UPDATE_FIELD } from 'state/forms/actions';
import type { Form, Field } from 'state/forms/types';
import type { Action } from 'state/types';

export type State = Form<{
  username: Field<string>,
  password: Field<string>,
}>;

const initialState: State = createForm({
  username: createField(''),
  password: createField(''),
});

const reducer = (state: State = initialState, action: Action): State => {
  if (action.formName !== 'login') {
    return state;
  }

  switch (action.type) {
    case UPDATE_FIELD:
      return {
        ...state,
        entities: {
          ...state.entities,
          [action.fieldName]: {
            ...state.entities[action.fieldName],
            value: action.value,
            isDirty: true,
          },
        },
      };
    default:
      return state;
  }
};

export default reducer;
