import { keyframes } from "styled-components";
import styled from "styled-components";

const loaderAnimation = keyframes`
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  border: 16px solid rgb(171, 207, 208, 0.3);
  border-top: 16px solid #abcfd0;
  border-radius: 50%;
  width: 33px;
  height: 33px;
  animation: ${loaderAnimation} 2s linear infinite;
`;
