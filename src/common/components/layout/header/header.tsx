import classNames from "classnames";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import { useAppContext } from "../../../context/appContext";

export default function Header(props: Props) {
  const { className } = props;

  const {
    auth,
    user,
    setUser,
    setAuth,
    setPass,
    loginModalVisible,
    setLoginModalVisible,
  } = useAppContext();

  const handleModal = () => setLoginModalVisible(!loginModalVisible);
  const handleExit = () => {
    setAuth(false);
    setUser("");
    setPass("");
  };

  return (
    <div className={classNames(className, styles.navbar)}>
      <div className={styles.navbarsub}>
        <div className={styles.navbarsublist}>
          <ul>
            <li className={styles.title}>
              <h2>TASK || CASE</h2>
            </li>

            <li
              className={styles.item}
              style={{
                marginLeft: "60px",
              }}
            >
              <Link className={styles.link} to="/">
                Home
              </Link>
            </li>

            <li
              className={styles.item}
              style={{
                marginLeft: "80px",
              }}
            >
              <Link className={styles.link} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <ul className={styles.itemx} style={{ marginRight: "40px" }}>
          {auth ? (
            <li className={styles.dropdown}>
              <div className={styles.dropbtn}>{user}</div>
              <div className={styles.dropdowncontent}>
                <span onClick={handleExit}>logout</span>
              </div>
            </li>
          ) : (
            <li className={styles.dropdown}>
              <div className={styles.dropbtnx} onClick={handleModal}>
                login
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
interface Props {
  className: string;
}
