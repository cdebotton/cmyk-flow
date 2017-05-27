/* @flow */

import React from 'react';
import styled, { css } from 'styled-components';
import { modularScale } from 'polished';

const Tooltip = styled.span`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  &:hover::before {
    content: "${props => props.content}";
    display: block;
    font-size: ${modularScale(-3)};
    background-color: rgba(0, 0, 0, 0.9);
    padding: ${modularScale(-2)} ${modularScale(0)};
    border-radius: 3px;
    position: absolute;
    z-index: 100;

    ${props => props.bottom && css`
        top: calc(100% + 5px);
    `}

    ${props => props.right && css`
        left: calc(100% + 11px);
    `}
  }

  &:hover::after {
    content: ' ';
    height: 0;
    width: 0;
    display: block;
    
    ${props => props.right && css`
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;
      border-right: 8px solid rgba(0, 0, 0, 0.9);
      position: absolute;
      z-index: 100;
        left: calc(100% + 3px);
    `}
  }
`;

type Props = {
  children: React$Element | string,
};

const Element = ({ children, ...rest }: Props): React$Element<any> =>
  React.cloneElement(children, {
    children: <Tooltip {...rest}>{children.props.children}</Tooltip>,
  });

export default Element;
