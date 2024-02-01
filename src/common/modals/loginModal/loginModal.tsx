import { useState } from "react";
import Button from "../../components/ui/button/button";
import Input from "../../components/ui/input/input";
import { useAppContext } from "../../context/appContext";
import styles from "./loginModal.module.scss";
import IconX from "../../media/icons/x.png";
import { validateLogin } from "../validation";

export default function LoginModal() {
  const handlePropagation = (e: any) => e.stopPropagation();

  const { setAuth, setUser, setPass, loginModalVisible, setLoginModalVisible } =
    useAppContext();

  const [firstNameValue, setFirstNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const proceedLogin = (e: any) => {
    e.preventDefault();
    if (!validateLogin(firstNameValue, passwordValue)) {
      return;
    }

    console.log("state");
    setLoginModalVisible(false);
    setAuth(true);

    setUser(firstNameValue);
    setPass(passwordValue);

    setFirstNameValue("");
    setPasswordValue("");
  };

  const handleModal = () => {
    setLoginModalVisible(false);
  };
  if (!loginModalVisible) return null;

  return (
    <div className={styles.container} onClick={handleModal}>
      <div className={styles.content} onClick={handlePropagation}>
        <div className={styles.modalTitle}>başlık</div>
        <form className={styles.modalForm} onSubmit={proceedLogin}>
          <Input
            type="text"
            name="authname"
            placeholder="username"
            value={firstNameValue}
            onChange={(e: any) => setFirstNameValue(e.target.value)}
          />
          <Input
            type="passwords"
            name="authpasswords"
            placeholder="userpasswords"
            value={passwordValue}
            onChange={(e: any) => setPasswordValue(e.target.value)}
          />
          <Button type="submit" text="submit" className={styles.button} />
        </form>

        <span className={styles.close} onClick={handleModal}>
          <img src={IconX} alt="closeButton" width={50} height={50} />
        </span>
      </div>
    </div>
  );
}
