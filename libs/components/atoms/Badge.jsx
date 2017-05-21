/* @flow */

import styled, { css } from 'styled-components';
import { modularScale, rem } from 'polished';

const Badge = styled.span`
    padding: ${modularScale(-4)};
    border: 2px solid #fff;
    font-weight: bold;
    font-size: ${modularScale(-2)};
    letter-spacing: ${rem('1px')};
    background-image:
      linear-gradient(
        to bottom right,
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 1.0)
      );
    margin-right: ${modularScale(0)};

    &:last-child {
      margin-right: 0;
    }

    ${props => props.warning && css`
      color: orange;
      border-color: orange;
    `}

    ${props => props.error && css`
      color: red;
      border-color: red;
    `}
`;

export default Badge;
