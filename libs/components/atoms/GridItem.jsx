/* @flow */

import React from 'react';
import styled from 'styled-components';
import { modularScale } from 'polished';

const GridItemOuter = styled.li`
  flex: 0 1 calc((100% / ${props => props.itemsPerRow}) - ${props => props.margin}px);
  background-color: rgba(255, 255, 255, 0.5);
  position: relative;

  & + & {
    margin-left: 10px;
  }

  &:nth-child(n + ${props => props.itemsPerRow + 1}) {
    margin-top: ${modularScale(1)};
  }

  &:nth-child(${props => props.itemsPerRow}n + 1) {
    margin-left: 0;
  }

  &:last-child {
    margin-right: auto;
  }

  &::before {
    display: block;
    content: ' ';  
    width: 100%;
    padding-bottom: calc(100% * ${props => props.aspectRatio});
  }
`;

GridItemOuter.defaultProps = {
  itemsPerRow: 3,
  margin: 10,
  aspectRatio: 4 / 3,
};

const GridItemInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  font-family: ${props => props.theme.typography.fonts.condensed};
  font-weight: 800;
  text-transform: uppercase;
  font-size: ${modularScale(1)};
  letter-spacing: 3px;
`;

const GridItem = ({ children }) =>
  (<GridItemOuter>
    <GridItemInner>
      {children}
    </GridItemInner>
  </GridItemOuter>);

export default GridItem;
