/* @flow */

import styled, { css, keyframes } from 'styled-components';

const shift = keyframes`
  from {
    background-position: 100vw 0;
  }
  to {
    background-position: 400vw -300vh;
  }
`;

const Page = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  
  ${props =>
    props.centered &&
    css`
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  `}

  ${props =>
    props.gradient &&
    css`
    background-image:
      linear-gradient(
        to top right,
        hsl(360, 90%, 68%),
        hsl(31, 100%, 51%),
        #ec4e91,
        #9535d3,
        #4dacff
      );
    background-size: 400vw 400vh;
    background-position: fixed;
    animation: ${shift} 12s linear infinite alternate;
    color: #fff;
  `}
`;

export default Page;
