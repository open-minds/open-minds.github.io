import React from 'react';
import { LOGO_IMG_URL } from '../../../constants';
import { Main, Logo, Text } from './styles';

function App() {
  return (
    <Main>
      <Logo src={LOGO_IMG_URL} alt="Team Open Minds logo" />
      <Text>
        <p>
          Stay connected on our{' '}
          <a href="https://www.facebook.com/open.minds.oran/" rel="noopener noreferrer">
            Facebook Page
          </a>
          , the website will be updated later :)
        </p>
      </Text>
    </Main>
  );
}

export default App;
