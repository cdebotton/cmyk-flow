/* @flow */

import styled from 'styled-components';
import { modularScale } from 'polished';
import Link from 'react-router-dom/Link';

const SidebarLink = styled(Link)`
  position: relative;
  color: #fff;
  text-decoration: none;
  font-size: ${modularScale(2)};

  & + & {
    margin-top: ${modularScale(0)};
  }
`;

export default SidebarLink;
