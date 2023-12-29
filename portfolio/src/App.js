import React from 'react';
import styled, { ThemeProvider } from 'styled-components'

import { darkTheme } from './utils/theme';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`


function App() {
  return (
      <ThemeProvider theme={darkTheme}>
        <Body>
          hi
        </Body>
     </ThemeProvider>
  );
}

export default App;
