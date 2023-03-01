import React from "react";
import {
  Tab,
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { data } from "../../utils/data";
import burgerIngredientsStyle from "./burger-ingredients.module.css";

export default function BurgerIngredients() {
  const [current, setCurrent] = React.useState("bun");

  const onTabClick = (title) => setCurrent(title);

  const itemTemplate = ({ image, price, name, _id }) => {
    return (
      <li key={_id} className={burgerIngredientsStyle.list_item}>
        <img
          alt={name}
          src={image}
          className={`${burgerIngredientsStyle.image} ml-4 mr-4`}
        />
        <div className={`${burgerIngredientsStyle.price_info} mt-4 mb-4`}>
          <span className="text text_type_digits-default mr-2">{price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <h3
          className={`${burgerIngredientsStyle.text} text text_type_main-default`}
        >
          {name}
        </h3>
        <Counter count={1} size="default" />
      </li>
    );
  };

  return (
    <div className={burgerIngredientsStyle.main_container}>
      <h1>Соберите бургер</h1>
      <Tab value="bun" active={current === "bun"} onClick={onTabClick}>
        Булки
      </Tab>
      <Tab value="sause" active={current === "sause"} onClick={onTabClick}>
        Соусы
      </Tab>
      <Tab value="main" active={current === "main"} onClick={onTabClick}>
        Начинки
      </Tab>
    </div>
  );
}
