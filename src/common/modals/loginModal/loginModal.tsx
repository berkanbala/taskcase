import Button from "../../components/ui/button/button";
import Input from "../../components/ui/input/input";
import styles from "./loginModal.module.scss";
import IconX from "../../media/icons/x.png";
import { useState } from "react";
import { useAppContext } from "../../context/appContext";
import { validateLogin } from "../validation";

export default function LoginModal() {
  const handlePropagation = (e: any) => e.stopPropagation();

  const { setAuth, setUser, setPass, loginModalVisible, setLoginModalVisible } =
    useAppContext();

  const [firstNameValue, setFirstNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const proceedLogin = (e: any) => {
    e.preventDefault();
    if (validateLogin(firstNameValue, passwordValue)) {
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
    <div onClick={handleModal} className={styles.container}>
      <div onClick={handlePropagation} className={styles.content}>
        <div className={styles.modalTitle}>
          <h1>Giriş Yap</h1>
        </div>
        <form onSubmit={proceedLogin} className={styles.modalForm}>
          <Input
            type="text"
            name="authname"
            placeholder="Username"
            value={firstNameValue}
            onChange={(e: any) => setFirstNameValue(e.target.value)}
            required
          />

          <Input
            type="password"
            name="authpasswords"
            placeholder="Password"
            value={passwordValue}
            onChange={(e: any) => setPasswordValue(e.target.value)}
            required
          />

          <Button
            type="submit"
            text="Submit"
            disabled={Object.values({ firstNameValue, passwordValue }).some(
              (loginValue) => loginValue === ""
            )}
          />
        </form>

        <span onClick={handleModal} className={styles.close}>
          <img src={IconX} alt="closeButton" width={45} height={45} />
        </span>
      </div>
    </div>
  );
}
