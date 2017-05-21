/* @flow */

import React from 'react';
import Field from 'components/atoms/Field';
import Input from 'components/atoms/Input';
import Label from 'components/atoms/Label';
import Badge from 'components/atoms/Badge';
import type { InputProps } from 'redux-form';

export type Props = {
  label: string,
} & InputProps;

const LabeledInput = ({ label, input, meta, ...rest }: Props): React$Element<any> => (
  <Field>
    <Input placeholder={label} {...rest} {...input} />
    <Label active={meta.touched && (meta.warning || meta.error)}>
      <span>{label}</span>
      {meta.touched && meta.warning && <Badge warning>{meta.warning}</Badge>}
      {meta.touched && meta.error && <Badge error>{meta.error}</Badge>}
    </Label>
  </Field>
);

export default LabeledInput;
