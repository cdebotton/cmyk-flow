/* @flow */

import styled from 'styled-components';
import { modularScale, rem } from 'polished';

const Viewport = styled.div`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  flex: 1 0 auto;
  padding: ${modularScale(1)} 0 ${modularScale(1)} ${rem('60px')};
  margin: 0 ${modularScale(2)} 0 0;
`;

export default Viewport;
