import Input from "../../common/components/ui/input/input";
import Image from "../../common/media/icons/img-01.png";
import Button from "../../common/components/ui/button/button";
import styles from "./contact.module.scss";
import useFormHook from "../../common/hooks/useFormHook";
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
        <h1>Bizimle İletişime Geçin</h1>
        <div className={styles.content}>
          <div className={styles.messageImage}>
            <img src={Image} alt="" />
          </div>
          <div className={styles.form}>
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
              maxlength={"10"}
              pattern="[0-9]{10}"
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
              disabled={Object.values(form).some(
                (formValue) => formValue === ""
              )}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
