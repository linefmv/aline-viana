import styled from "styled-components";

export const Nav = styled.nav`
  height: 80px;
padding-bottom: 10px;
  background-color: pink;
  display: flex;
  align-items: flex-end;

  ul {
    width: 25%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;
