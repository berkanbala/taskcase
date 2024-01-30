import TextHome from "../../common/pages/textHome/textHome";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <TextHome />
    </div>
  );
}
