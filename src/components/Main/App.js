import React from 'react';
import { Main, Logo, Text } from './styles';

const logo = `${process.env.PUBLIC_URL}/android-chrome-512x512.png`;

function App() {
  return (
    <Main>
      <Logo src={logo} alt="Team Open Minds logo" />
      <Text>
        <p>
          Stay connected on our{' '}
          <a
            href="https://www.facebook.com/open.minds.oran/"
            rel="noopener noreferrer"
          >
            Facebook Page
          </a>
          , the website will be updated later :)
        </p>
      </Text>
    </Main>
  );
}

export default App;
