import styled from "styled-components";

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  overflow-y: scroll;
  max-height: 77vh;

  div {
    padding: 0 2vh;
    text-align: justify;
  }

  p {
    text-indent: 10px;
  }
  ::-webkit-scrollbar-track {
    border: 1px solid #f7b4a7;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #f7b4a7;
  }
`;
