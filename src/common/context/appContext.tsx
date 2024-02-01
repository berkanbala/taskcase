import { createContext, useContext, useState } from "react";
import UseModals from "../hooks/useModal";

export const MainContext = createContext({} as any);

export const useAppContext = () => useContext(MainContext);

export const AppContext = ({ children }: Props) => {
  const initialValues = { authname: "", authpasswords: "", auth: false };

  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const { loginModalVisible, setLoginModalVisible } = UseModals();

  const contextValue = {
    pass,
    setPass,
    user,
    setUser,
    auth,
    setAuth,
    initialValues,
    loginModalVisible,
    setLoginModalVisible,
  };
  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
};

interface Props {
  children: React.ReactNode;
}
