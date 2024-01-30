import clsx from "clsx";
import styles from "./input.module.scss";

export default function Input(props: any) {
  const { type, text, placeholder, name, className } = props;

  return (
    <div className={clsx(styles.container, className)}>
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        className={styles.input}
      >
        {text}
      </input>
    </div>
  );
}
