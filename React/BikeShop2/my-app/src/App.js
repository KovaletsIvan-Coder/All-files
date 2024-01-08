import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./сomponent/Header/Header";
import Brands from "./сomponent/Brands/Brands";
import AppRouter from "./сomponent/AppRouter/AppRouter";
import Basket from "./сomponent/Basket/Basket";
import { BasketContext, ulBasketContext, visibleContext } from "./context";

function App() {
  const gettingItem = localStorage.getItem("elementsInBasket");
  const gettingItem2 = gettingItem ? JSON.parse(gettingItem) : [];
  const [itemInBasket, setItemInBasket] = useState(0);
  const [elementsInBasket, setElementsInBasket] = useState(gettingItem2);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const prevAmount = localStorage.getItem("itemInBasket") || 0;
    setItemInBasket(+prevAmount);
  }, []);
  return (
    <visibleContext.Provider value={{ visible, setVisible }}>
      <ulBasketContext.Provider
        value={{
          elementsInBasket,
          setElementsInBasket,
        }}
      >
        <BasketContext.Provider
          value={{
            itemInBasket,
            setItemInBasket,
          }}
        >
          <BrowserRouter>
            <Header />
            <Brands />
            {visible && <Basket />}
            <AppRouter />
          </BrowserRouter>
        </BasketContext.Provider>
      </ulBasketContext.Provider>
    </visibleContext.Provider>
  );
}

export default App;
