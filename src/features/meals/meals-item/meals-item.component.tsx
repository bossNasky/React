import { MealsForm } from "./meals-form/meals-form.component";
import style from "./meals-item.module.css";

type MealsItemProps = {
  id: string;
  name: string;
  description: string;
  price: number;
};

const MealsItem = function ({ id, name, description, price }: MealsItemProps) {
  const mealPrice = `$${price.toFixed(2)}`;

  return (
    <li className={style["meal"]}>
      <div>
        <h3>{name}</h3>
        <p className={style["description"]}>{description}</p>
        <p className={style["price"]}>{mealPrice}</p>
      </div>
      <div>
        <MealsForm id={id} />
      </div>
    </li>
  );
};

export { MealsItem };
