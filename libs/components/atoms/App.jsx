/* @flow */

import styled, { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

injectGlobal`
  ${normalize()}
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ::selection {
    background-color: black;
  }
  
  body {
    font-family: ${props => props.theme.admin.typography.fonts.regular};
  }
`;

const App = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

export default App;
