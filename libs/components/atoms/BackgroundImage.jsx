import styled from 'styled-components';

const BackgroundImage = styled.span`
  background-image: url(${props => props.src});
  background-position: center center;
  background-size: cover;
  z-index: 0;
  top: ${props => props.margin}px;
  left: ${props => props.margin}px;
  width: calc(100% - ${props => 2 * props.margin}px);
  height: calc(100% - ${props => 2 * props.margin}px);
  border-radius: 3px;
  opacity: ${props => props.opacity};
  position: absolute;
`;

BackgroundImage.defaultProps = {
  margin: 10,
  opacity: 0.5,
};

export default BackgroundImage;
