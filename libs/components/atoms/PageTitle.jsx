/* @flow */

import styled, { keyframes } from 'styled-components';
import { modularScale } from 'polished';

const PageTitle = styled.h2`
  flex: 0 0 auto;
  font-family: ${props => props.theme.typography.fonts.condensed};
  font-weight: 400;
  font-size: ${modularScale(6)};
  margin: 0;
  left: 0;
  line-height: 1;
  writing-mode: vertical-rl;
  text-transform: uppercase;
  letter-spacing: 1px;
  user-select: none;
  cursor: default;
  color: rgba(255, 255, 255, 0.6);
`;

export default PageTitle;
