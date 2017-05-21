/* @flow */

import styled, { css } from 'styled-components';
import { modularScale, rem } from 'polished';

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #fff;
  font-family: ${props => props.theme.typography.fonts.condensed};
  text-transform: uppercase;
  letter-spacing: ${rem('2px')};
  font-weight: bold;
  margin-right: ${modularScale(0)};

  &:focus {
    outline: none;
  }

  &:last-child {
    margin-right: 0;
  }

  ${props => props.primary && css`
    padding: ${modularScale(-2)} ${modularScale(0)};
    font-size: ${modularScale(0)};
    border: 2px solid #fff;

    &:hover {
      background-image: linear-gradient(to bottom right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2));
    }
  `}
`;

export default Button;
