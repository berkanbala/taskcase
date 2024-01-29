import classNames from "classnames";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";

export default function Header(props: Props) {
  const { className } = props;

  return (
    <div className={classNames(className, styles.navbar)}>
      <div className={styles.navbarsub}>
        <div className={styles.title}>
          <ul>
            <li>
              <h1>Task Case</h1>
            </li>
          </ul>
        </div>
        <ul>
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
              marginLeft: "60px",
            }}
          >
            <Link className={styles.link} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
interface Props {
  className: string;
}
