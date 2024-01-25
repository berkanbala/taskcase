import { Outlet } from "react-router-dom";
import Header from "../common/components/layout/header/header";
import styles from "./appLayout.module.scss";
import Footer from "../common/components/layout/footer/footer";

export default function AppLayout() {
  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      <div className={styles.outlet}>
        <Outlet />
      </div>
      <Footer className={styles.footer} />
    </div>
  );
}
