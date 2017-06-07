/* @flow */

import styled, { css } from 'styled-components';
import { rem } from 'polished';

const bg = 'rgba(0, 0, 0, 0.7)';

const Tooltip = styled.span`
  :not(:hover) > & {
    opacity: 0;
    margin-left: 12px;
  }

  color: #fff;
  z-index: 100;
  transition:
    opacity 175ms ease-in-out,
    margin-left 175ms ease-in-out;
  text-shadow: none;
  display: flex;
  pointer-events: none;
  flex-flow: no wrap;
  position: absolute;
  background-color: ${bg};
  font-size: ${rem('10px')};
  padding: ${rem('6px')} ${rem('12px')};
  border-radius: 5px;
  white-space: nowrap;

  ${props =>
    props.right &&
    css`
    left: calc(100% + ${rem('12px')});

    &::before {
      content: ' ';
      display: block;
      position: absolute;
      top: 50%;
      transform: translate3d(0, -50%, 0);
      right: 100%;
      border-right: 6px solid ${bg};
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
    }
  `}
`;

export default Tooltip;
