import styles from "./contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1>başlık</h1>
      <div className={styles.content}>
        <span>name-surname</span>
        <span>email</span>
        <span>telefon</span>
        <span>message</span>
      </div>
    </div>
  );
}
