import { createContext } from 'react';
import { Task } from '../../models/task';

export type ContextStructure = {
  foo: string;
  counter: number
  setCounter: (count:number) => void
  taskTools: ReturnType<ThisType(task)>
};

const initialContext = {} as ContextStructure 

export const AppContext = createContext<ContextStructure>(initialContext);

AppContext.Provider;
