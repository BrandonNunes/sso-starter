import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  h3 {
    font-weight: bold;
    text-align: center;
  }
`;
export const ImageContent = styled.div`
  max-width: 200px;
  max-height: 150px;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
