import { createContext } from 'preact';
import { useContext, useState } from 'preact/hooks';

export type DataType = {
  code: string;
  terminology: string;
  value: string;
  path: string;
};

type DataContextType = {
  data: DataType[];
  setData: (data: DataType[]) => void;
};

// Create Context Object
export const DataContext = createContext<DataContextType>({
  data: [],
  setData: () => {}
});
