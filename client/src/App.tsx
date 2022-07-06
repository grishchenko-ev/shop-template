import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './modules/components/Router';
import * as Header from './modules/components/header';
import { Aside } from './modules/components/aside';
import { useTypedSelector } from './modules/hooks/use-typed-selector';
import './index.scss';

function App() {
  const state = useTypedSelector((state) => state.user);
  console.log(state);

  return (
    <BrowserRouter>
      <Header.Layout />
      <main>
        <Aside />
        <Router />
      </main>
    </BrowserRouter>
  );
}

export default App;
