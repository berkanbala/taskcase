import { createContext, useContext } from "react";

export const MainContext = createContext({} as any);

export const useAppContext = () => useContext(MainContext);

export const AppContext = ({ children }: Props) => {
  return <MainContext.Provider value={{}}>{children} </MainContext.Provider>;
};

interface Props {
  children: React.ReactNode;
}
