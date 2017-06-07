/* @flow */

import styled from 'styled-components';
import { modularScale } from 'polished';

const Viewport = styled.div`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  flex: 1 0 auto;
  padding: ${modularScale(1)} ${modularScale(2)} ${modularScale(1)} 0;
`;

export default Viewport;
