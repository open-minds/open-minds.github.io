import styled from 'styled-components';

const Main = styled.header`
  height: 100vh;
  width: 100%;
  background-color: #0094ce;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 400px;
  height: 400px;
`;

const Text = styled.p`
  font-size: 140%;
  font-weight: bold;
  text-align: center;

  a,
  a:active,
  a:visited {
    color: red;
  }
`;

export { Main, Logo, Text };
