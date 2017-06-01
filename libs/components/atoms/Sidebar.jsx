/* @flow */

import styled from 'styled-components';
import { rem, modularScale } from 'polished';

const Sidebar = styled.nav`
  display: flex;
  flex-flow: column nowrap;
  flex: 0 0 ${rem('75px')};
  background-color: #1a1a1a;
  height: 100%;
  min-height: 100vh;
  padding: ${modularScale(1)}
`;

export default Sidebar;
