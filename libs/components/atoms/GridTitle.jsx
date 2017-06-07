/* @flow */

import styled from 'styled-components';
import { modularScale } from 'polished';

const GridTitle = styled.h3`
  background-color: black;
  color: #fff;
  padding: ${modularScale(-2)} ${modularScale(-1)};
`;

export default GridTitle;
