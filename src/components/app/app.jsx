import React from "react";
import appStyles from "./app.module.css";

import AppHeader from "../header/header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

export default function App() {
  return (
    <div className={`${appStyles.app} pb-10`}>
      <>
        <AppHeader />
        <main className={appStyles.main}>
          <section className={appStyles.main_container}>
            <>
              <BurgerIngredients />
            </>
          </section>
        </main>
      </>
    </div>
  );
}
