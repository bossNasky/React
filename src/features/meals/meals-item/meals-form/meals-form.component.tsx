import { Input } from "@features/ui";
import style from "./meals-form.module.css";

type MealsFormProps = {
  id: string;
};

const MealsForm = function ({ id }: MealsFormProps) {
  const inputID = `amount-${id}`;

  return (
    <form className={style["form"]}>
      <Input
        label="amount"
        id={inputID}
        type="text"
        min="1"
        max="5"
        step="1"
        defaultValue="1"
      />
      <button>+ Add</button>
    </form>
  );
};

export { MealsForm };
