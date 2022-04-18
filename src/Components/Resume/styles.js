import styled from "styled-components";

export const Content = styled.aside`
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Image = styled.img`
  width: 150px;
  align-self: center;
  border-radius: 2vh;
`;
export const Name = styled.p`
  text-align: center;
  padding: 2vh;
`;

export const History = styled.p``;

export const SocialMedia = styled.div`
  width: 100%;
  max-width: 240px;
  display: flex;
  justify-content: space-between;
  padding: 2vh 0;

  a {
    color: inherit;
    text-decoration: none;
  }
`;
