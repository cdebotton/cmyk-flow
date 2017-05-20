/* @flow */

import styled from 'styled-components';
import { rem } from 'polished';
import { Wrapper } from 'components/Input';

const Fieldset = styled.fieldset`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  border: none;
  margin: 0;
  padding: 0;
  width: ${rem('480px')};
  max-width: calc(100vw - ${rem('32px')});

  ${Wrapper} {
    flex: 0 1 calc(50% - ${rem('16px')});
  }
`;

export default Fieldset;
