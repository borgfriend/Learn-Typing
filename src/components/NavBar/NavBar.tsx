import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: white;
  box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0),
    0 1px 1px rgba(16, 22, 26, 0.2);
  & > * {
    padding: 0 2rem;
  }
`;
