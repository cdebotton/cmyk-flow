/* @flow */

import styled from 'styled-components';
import { rem, modularScale } from 'polished';

const Sidebar = styled.nav`
  display: flex;
  flex-flow: column nowrap;
  flex: 0 0 auto;
  background:
    linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.3) 40%,
      rgba(255, 255, 255, 0.00)
    );
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  height: 100%;
  min-height: 100vh;
  width: ${rem('60px')};
  padding: ${modularScale(1)} 0;
`;

export default Sidebar;
