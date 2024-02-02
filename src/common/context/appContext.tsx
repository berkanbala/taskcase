import useModals from "../hooks/useModal";
import { createContext, useContext, useState } from "react";

export const MainContext = createContext({} as any);

export const useAppContext = () => useContext(MainContext);

export default function AppContext({ children }: Props) {
  const initialAuthValue = { authname: "", authpasswords: "", auth: false };

  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const { loginModalVisible, setLoginModalVisible } = useModals();

  const contextValue = {
    pass,
    setPass,
    user,
    setUser,
    auth,
    setAuth,
    initialAuthValue,
    loginModalVisible,
    setLoginModalVisible,
  };

  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
}

interface Props {
  children: React.ReactNode;
}
