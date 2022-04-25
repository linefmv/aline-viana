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

  ::-webkit-scrollbar {
    width: 6px;
    border-left: 1px solid #e6ecf8;
  }

  ::-webkit-scrollbar-track {
    background: #e6ecf8;
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: pink;
    border-radius: 20px;
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
`;
