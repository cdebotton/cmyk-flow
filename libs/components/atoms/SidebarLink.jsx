/* @flow */

import styled from 'styled-components';
import { modularScale } from 'polished';
import Link from 'react-router-dom/Link';

const SidebarLink = styled(Link)`
  position: relative;
  color: #fff;
  text-decoration: none;
  font-size: ${modularScale(2)};
  background-color: transparent;
  border: none;
  margin-top: ${modularScale(0)};
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:first-child {
    margin-top: 0;
  }
`;

export default SidebarLink;
