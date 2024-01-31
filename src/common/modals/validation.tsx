export const validate = (props: any) => {
  if (
    props.fname === "" ||
    props.email === "" ||
    props.phone === "" ||
    props.textarea === ""
  ) {
    return false;
  }
  return true;
};
