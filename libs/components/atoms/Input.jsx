/* @flow */

import styled from 'styled-components';
import { placeholder, rem, modularScale } from 'polished';

const Input = styled.input`
  background-color: transparent;
  padding: ${modularScale(-2)} ${modularScale(-1)};
  font-size: ${modularScale(0)};
  letter-spacing: ${rem('1px')};
  color: #ddd;
  border: none;
  border-bottom: 2px solid #ddd;

  &:focus {
    color: #fff;
    border-bottom: 2px solid #fff;
  }

  ${props => placeholder({
    fontFamily: props.theme.typography.fonts.condensed,
    fontWeight: 300,
    textTransform: 'uppercase',
    letterSpacing: rem('4px'),
    color: '#eee',
    fontSize: modularScale(0),
  })}

  &:focus {
    outline: none;
  }
`;

export default Input;
