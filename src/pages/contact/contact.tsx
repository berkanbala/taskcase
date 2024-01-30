import Button from "../../common/components/ui/button/button";
import Input from "../../common/components/ui/input/input";
import styles from "./contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1>Başlık</h1>
        <Input className={styles.formInput} type="text" placeholder="name" />
        <Input className={styles.formInput} type="email" placeholder="email" />
        <Input className={styles.formInput} type="phone" placeholder="phone" />
        <Input className={styles.textArea} type="text" placeholder="message" />
        <Button type="submit" text={"Submit"} onClick={() => console.log(1)} />
      </div>
    </div>
  );
}
