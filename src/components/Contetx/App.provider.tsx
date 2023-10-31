import { useState } from 'react';
import { AppContext } from './app.context';

type Props = {
  children: JSX.Element;
};

export function AppContextProvider( {children}: Props) {
  const [count, setCount] = useState(0)
  const context: CountextStructure = {
    foo: String,
    count,
    setCounT: setCount,
  }

  return (
    <AppContext.Provider value={{ foo: 'el contexto de pp' }}
      {children}
    ></AppContext.Provider>
  );
}
