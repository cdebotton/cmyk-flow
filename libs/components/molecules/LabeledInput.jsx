/* @flow */

import React from 'react';
import Field from 'components/atoms/Field';
import Input from 'components/atoms/Input';
import Label from 'components/atoms/Label';

export type Props = {
  label: string,
};

const LabeledInput = ({ label, isDirty, isValid, ...inputProps }: Props): React$Element<any> => (
  <Field>
    <Input placeholder={label} {...inputProps} />
    <Label>{label}</Label>
  </Field>
);

export default LabeledInput;
