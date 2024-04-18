import styled from "styled-components";

export const ContainerStyled = styled.div`
  width: 35%;
  text-align: center;
  margin: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const NavbarStyled = styled.div`
  height: 5rem;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  line-height: 5rem;
  border-bottom: 1px solid var(--secondary);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.5rem;
  }
`;
