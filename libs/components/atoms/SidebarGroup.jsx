/* @flow */

import styled, { css } from 'styled-components';

const SidebarGroup = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  ${props =>
    props.push &&
    css`
      margin-top: auto;
  `}
`;

export default SidebarGroup;
