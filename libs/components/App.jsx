/* @flow */

import styled, { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

injectGlobal`
  ${normalize()}
`;

const App = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

export default App;
