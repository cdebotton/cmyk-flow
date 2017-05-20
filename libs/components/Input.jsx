/* @flow */

import React from 'react';
import styled from 'styled-components';
import { placeholder, rem } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const Field = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #fff;
  padding: ${rem('10px')} ${rem('20px')};
  color: #fff;
  font-size: rem('14px');
  ${placeholder({ color: '#eee', fontSize: rem('12px') })}

  &:focus {
    outline: none;
  }
`;

export const Label = styled.label`
  opacity: 0;
  transform: translate3d(0, -5px, 0);
  font-size: ${rem('12px')};
  padding: ${rem('5px')} ${rem('20px')} 0;
  transition:
    opacity 175ms ease-out,
    transform 175ms ease-out;

  ${Field}:not(:placeholder-shown) + & {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition:
      opacity 175ms ease-in,
      transform 175ms ease-in;
  }
`;

export type Props = {
  label: string,
};

const Input = ({ label, isDirty, isValid, ...inputProps }: Props): React$Element<any> => (
  <Wrapper>
    <Field placeholder={label} {...inputProps} />
    <Label>{label}</Label>
  </Wrapper>
);

export default Input;
