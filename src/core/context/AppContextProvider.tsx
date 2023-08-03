import { useState } from "preact/hooks";
import { DataContext, DataType } from "./AppContext";

export const DataProvider: preact.FunctionComponent = ({ children }) => {
  const [data, setData] = useState<DataType[]>([]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
