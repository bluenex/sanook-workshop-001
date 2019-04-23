import React from 'react';
import logo from './logo.svg';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const logoRotation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const AnimatedLogo = styled.img`
  animation: ${logoRotation} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

const CommonLink = styled.a`
  color: #61dafb;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Header>
        <AnimatedLogo
          src={logo}
          alt="logo"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <CommonLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </CommonLink>
      </Header>
    </Container>
  );
}

export default App;
