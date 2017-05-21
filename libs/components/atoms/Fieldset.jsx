/* @flow */

import styled from 'styled-components';
import { rem, modularScale } from 'polished';
import Field from 'components/atoms/Field';

const Fieldset = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  border: none;
  margin: 0;
  padding: 0;
  width: ${rem('480px')};
  max-width: calc(100vw - ${modularScale(2)});

  ${Field} {
    flex: 0 1 calc(50% - ${modularScale(1)});
  }
`;

export default Fieldset;
