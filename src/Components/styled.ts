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
  // height: 5rem;
  border-bottom: 1px solid var(--secondary);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.5rem;
  }
`;

export const NavbarBrand = styled.p`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-top: 1rem;

  @media (max-width: 768px) {
    // width: 100%;
    font-size: 1.5rem;
  }
`;

export const InputToggleTheme = styled.input`
  --size: 1.4rem;
  margin-top: 0.35rem;

  appearance: none;
  outline: none;
  cursor: pointer;

  width: var(--size);
  height: var(--size);
  box-shadow: inset calc(var(--size) * 0.33) calc(var(--size) * -0.25) 0;
  border-radius: 999px;
  color: var(--black);

  transition: all 500ms;

  &:checked {
    --ray-size: calc(var(--size) * -0.4);
    --offset-orthogonal: calc(var(--size) * 0.65);
    --offset-diagonal: calc(var(--size) * 0.45);

    transform: scale(0.75);
    color: hsl(40, 100%, 50%);
    box-shadow: inset 0 0 0 var(--size),
      calc(var(--offset-orthogonal) * -1) 0 0 var(--ray-size),
      var(--offset-orthogonal) 0 0 var(--ray-size),
      0 calc(var(--offset-orthogonal) * -1) 0 var(--ray-size),
      0 var(--offset-orthogonal) 0 var(--ray-size),
      calc(var(--offset-diagonal) * -1) calc(var(--offset-diagonal) * -1) 0
        var(--ray-size),
      var(--offset-diagonal) var(--offset-diagonal) 0 var(--ray-size),
      calc(var(--offset-diagonal) * -1) var(--offset-diagonal) 0 var(--ray-size),
      var(--offset-diagonal) calc(var(--offset-diagonal) * -1) 0 var(--ray-size);
  }

  z-index: 1;
  &:checked {
    & ~ .background {
      --bg: white;
    }
    & ~ .title {
      --color: hsl(40, 100%, 50%);
    }
  }

  .title {
    --color: var(--black);
    color: var(--color);
    z-index: 1;
    cursor: pointer;
    display: block;
    padding: 0.5rem 0 0;
    transition: color 500ms;
  }
`;

export const ImageMember = styled.img`
  width: 200px;

  @media (max-width: 768px) {
    width: 200px;
  }
`
