/* @flow */

import styled from 'styled-components';
import { placeholder, rem, modularScale } from 'polished';

const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #fff;
  padding: ${modularScale(-2)} ${modularScale(-1)};
  color: #fff;
  font-size: ${modularScale(0)};
  letter-spacing: ${rem('1px')};

  ${props => placeholder({
    fontFamily: props.theme.typography.fonts.condensed,
    fontWeight: 300,
    textTransform: 'uppercase',
    letterSpacing: rem('2px'),
    color: '#eee',
    fontSize: modularScale(0),
  })}

  &:focus {
    outline: none;
  }
`;

export default Input;
