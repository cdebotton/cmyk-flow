/* @flow */

import React from 'react';
import Field from 'components/atoms/Field';
import Input from 'components/atoms/Input';
import Label from 'components/atoms/Label';
import type { InputProps } from 'redux-form';

export type Props = {
  label: string,
} & InputProps;

const LabeledInput = ({ label, input, meta, ...rest }: Props): React$Element<any> => (
  <Field>
    <Input placeholder={label} {...rest} {...input} />
    <Label>{(meta.touched && meta.error) || label}</Label>
  </Field>
);

export default LabeledInput;
