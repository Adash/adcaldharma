import React, { useState } from 'react';
import styled from 'styled-components';
import { Door } from './Door';
import Penguining from './penguining.jpg';

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #84a59d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #f5cac3;
`;

function App() {
  const [open, setOpen] = useState(false);

  return (
    <AppWrapper>
      <h1>Click on the door</h1>
      <Door
        open={open}
        setOpen={setOpen}
        backgroundImage={Penguining}
        text="happy penguins"
      />
    </AppWrapper>
  );
}

export default App;
