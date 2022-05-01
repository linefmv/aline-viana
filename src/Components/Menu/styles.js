import styled from "styled-components";

export const Nav = styled.nav`
  height: 80px;
  padding-bottom: 10px;
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;

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
    color: #f7b4a7;
    font-weight: 600;
  }
`;
