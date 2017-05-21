/* @flow */

import styled from 'styled-components';
import { rem, modularScale } from 'polished';
import Field from 'components/atoms/Field';

const Fieldset = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: ${(props) => {
    switch (props.align) {
      case 'right':
        return 'flex-end';
      case 'left':
        return 'flex-start';
      default:
        return 'space-between';
    }
  }};
  border: none;
  margin: 0 0 ${modularScale(2)};
  padding: 0;
  width: ${rem('640px')};
  max-width: calc(100vw - ${modularScale(2)});

  &:last-child {
    margin-bottom: 0;
  }

  ${Field} {
    flex: 0 1 calc(50% - ${modularScale(1)});
  }
`;

export default Fieldset;
