/* @flow */

import styled, { css } from 'styled-components';
import { modularScale, rem } from 'polished';
import Input from 'components/atoms/Input';

const showLabel = css`
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition:
    opacity 175ms ease-in,
    transform 175ms ease-in;
`;

const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  opacity: 0;
  transform: translate3d(0, -5px, 0);
  font-size: ${modularScale(-1)};
  padding: ${modularScale(-2)} 0 0 ${modularScale(0)};
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: ${rem('2px')};
  color: #fff;
  font-family: ${props => props.theme.typography.fonts.condensed};

  transition:
    opacity 175ms ease-out,
    transform 175ms ease-out;
  
  ${props => props.active && showLabel}
  ${Input}:not(:placeholder-shown) + & { ${showLabel} }

  & > *:first-child {
    margin-right: auto;
  }
`;

export default Label;
