import { useStore } from '@utils/useStore';
import styled, { keyframes } from 'styled-components';

const animateCenter = keyframes`
  0% {
    margin-bottom: 15px;
  }

  50% {
    margin-bottom: 0px;
  }

  100% {
    margin-bottom: 15px;
  }
`;

const animateBorders = keyframes`
  0% {
    margin-bottom: 0px;
  }

  50% {
    margin-bottom: 15px;
  }

  100% {
    margin-bottom: 0px;
  }
`;

const Loader = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  > div {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
  }

  > div:nth-child(2) {
    margin-bottom: 15px;
    animation: ${animateCenter} 0.7s linear infinite;
  }

  > div:nth-child(1),
  > div:nth-child(3) {
    animation: ${animateBorders} 0.7s linear infinite;
  }
`;

const StyledLoader = () => {
  const color = useStore().colorMain;
  return (
    <Loader color={color}>
      <div></div>
      <div></div>
      <div></div>
    </Loader>
  );
};

export default StyledLoader;
