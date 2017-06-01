/* @flow */

import React from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';

const Tooltip = styled.span`
  :not(:hover) > & {
    opacity: 0;
    margin-left: 5px;
  }

  transition:
    opacity 175ms ease-in-out,
    margin-left 175ms ease-in-out;

  display: flex;
  pointer-events: none;
  flex-flow: no wrap;
  position: absolute;
  background-color: #000;
  font-size: ${rem('12px')};
  padding: ${rem('6px')} ${rem('12px')};
  border-radius: 3px;
  white-space: nowrap;

  ${props => props.right && css`
    left: calc(100% + ${rem('6px')});
    bottom: 50%;
    transform: translate3d(0, 50%, 0);

    &::before {
      content: ' ';
      display: block;
      position: absolute;
      right: 100%;
      border-right: 7px solid #000;
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;
    }
  `}
`;

export default Tooltip;
