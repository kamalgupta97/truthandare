import styled from "styled-components";

export const BottleImage = styled.img`
  position: absolute;
  width: 100px;
  top: calc(50% - 100px);
  animation: roundbottle 0.5s 5 linear;
  @keyframes roundbottle {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
