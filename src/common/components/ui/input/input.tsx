import clsx from "clsx";
import styles from "./input.module.scss";

export default function Input(props: any) {
  const { type, text, placeholder, name, className, onChange, value } = props;

  return (
    <div className={clsx(styles.container, className)}>
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        className={styles.input}
        value={value}
        onChange={onChange}
      >
        {text}
      </input>
    </div>
  );
}
