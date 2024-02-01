import Button from "../../common/components/ui/button/button";
import Input from "../../common/components/ui/input/input";
import styles from "./contact.module.scss";
import { useFormHook } from "../../common/hooks/useFormHook";
import { validate } from "../../common/modals/validation";

export default function Contact() {
  const initialValues = {
    fname: "",
    email: "",
    phone: "",
    message: "",
  };

  const [form, setForm] = useFormHook(initialValues);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!validate(form)) {
      return;
    }
    console.log(form);
    setForm(initialValues);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <h1>Bizimle İletişime Geçin</h1>
          <Input
            className={styles.formInput}
            type="text"
            placeholder="Full Name"
            value={form.fname}
            onChange={setForm}
            name="fname"
          />

          <Input
            className={styles.formInput}
            type="email"
            placeholder="E-mail"
            value={form.email}
            onChange={setForm}
            name="email"
          />

          <Input
            className={styles.formInput}
            type="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={setForm}
            name="phone"
          />

          <Input
            className={styles.textArea}
            type="text"
            placeholder="Message"
            value={form.message}
            onChange={setForm}
            name="message"
          />

          <Button
            type="submit"
            text={"Submit"}
            // onClick={() => console.log(1)}
            disabled={Object.values(form).some((formValue) => formValue === "")}
          />
        </div>
      </form>
    </div>
  );
}
