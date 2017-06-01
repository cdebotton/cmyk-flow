/* @flow */

import styled from 'styled-components';
import { modularScale } from 'polished';

const SidebarGroup = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  margin-top: ${modularScale(4)};

  &:first-child {
    margin-top: 0;
  }
`;

export default SidebarGroup;
