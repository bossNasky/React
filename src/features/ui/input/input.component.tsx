import style from "./input.module.css";

type InputProps = {
  id: string;
  label: string;
  type: "text" | "number";
  min?: string;
  max?: string;
  step?: string;
  defaultValue?: string;
};

const Input = function ({ id, label, ...rest }: InputProps) {
  return (
    <div className={style["input"]}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...rest} />
    </div>
  );
};

export { Input };
