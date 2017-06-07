/* @flow */

import styled from 'styled-components';
import { modularScale, rem } from 'polished';
import Link from 'react-router-dom/Link';

const SidebarLink = styled(Link)`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  align-content: center;
  color: hsla(0, 0%, 0%, 0.4);

  text-decoration: none;
  font-size: ${modularScale(1)};
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition:
    font-size 135ms ease-in,
    text-shadow 135ms ease-in;

  height: ${rem('30px')};

  &:hover {
    color: hsla(212, 100%, 100%, 1.0);
    font-size: ${modularScale(3)};
  }

  & + & {
    margin-top: 1rem;
  }

  &:focus {
    outline: none;
  }

  &:first-child {
    margin-top: 0;
  }
`;

export default SidebarLink;
