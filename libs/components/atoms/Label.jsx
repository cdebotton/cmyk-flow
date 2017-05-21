/* @flow */

import styled from 'styled-components';
import { modularScale, rem } from 'polished';
import Input from 'components/atoms/Input';

const Label = styled.label`
  opacity: 0;
  transform: translate3d(0, -5px, 0);
  font-size: ${modularScale(-1)};
  padding: ${modularScale(-2)} ${modularScale(-1)};
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: ${rem('2px')};
  color: #fff;
  font-family: ${props => props.theme.typography.fonts.condensed};

  transition:
    opacity 175ms ease-out,
    transform 175ms ease-out;

  ${Input}:not(:placeholder-shown) + & {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition:
      opacity 175ms ease-in,
      transform 175ms ease-in;
  }
`;

export default Label;
