import React, { useState } from 'react';

import AppRouter from "./AppRouter";
import { Context, initialState } from './context/context';

export default function App() {

  const [state, setState] = useState(initialState);

  return (
    <Context.Provider value={{ state, setState }}>
      <AppRouter />
    </Context.Provider>
  );
}
