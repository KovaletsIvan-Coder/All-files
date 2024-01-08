import React, { useContext, useState, useEffect } from "react";
import { ulBasketContext, BasketContext, visibleContext } from "../../context";
import "./BasketPage.css";

const BasketPage = () => {
  let { itemInBasket, setItemInBasket } = useContext(BasketContext);
  let { elementsInBasket, setElementsInBasket } = useContext(ulBasketContext);
  let { setVisible } = useContext(visibleContext);
  const [newArray, setNewArray] = useState(elementsInBasket);

  //для того щоб іконка кошика була видима усюди,окрім самої сторінки кошика
  useEffect(() => {
    setVisible(false);
    return () => {
      setVisible(true);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("elementsInBasket", JSON.stringify(newArray));
  }, [newArray]);
  //видалення елемента
  const removeElement = (curElem) => {
    setNewArray(
      newArray.filter(
        (element) =>
          element.identifier !== curElem.identifier ||
          element.name !== curElem.name
      )
    );
    if ((newArray.length = 0)) {
      setElementsInBasket((elementsInBasket = []));
    }
    setItemInBasket((itemInBasket -= 1));
    localStorage.setItem("itemInBasket", itemInBasket);
    localStorage.setItem("elementsInBasket", JSON.stringify(newArray));
  };

  //визначення загальної суми
  const totalPrice = newArray.reduce((acumulator, curent) => {
    return acumulator + parseFloat(curent.price);
  }, 0);
  //повідомлення про пустий кошик
  if (newArray.length === 0) {
    return <h1 className="empty_basket">Basket is empty</h1>;
  }
  console.log(newArray);

  return (
    <>
      <div className="label_container">
        <div className="label">Item</div>
        <div className="label">Price</div>
        <div className="label">Quantity</div>
      </div>
      {/* {newArray.length  < 1 ?<h1>basket is empty</h1>} */}

      <ul>
        {newArray.map((item, index) => (
          <li key={index} className="basket_item_li">
            <section>
              <img className="basket_item_img" src={item.src} alt="" />
              <h4>
                {item.name}
                <p className="p_size_basket">Wheels:{item.wheelsSize}</p>
                <p className="p_size_basket">Size:{item.frameSize}</p>
              </h4>
            </section>

            <section>
              <h4>{item.price}$</h4>
            </section>

            <section>
              <button
                onClick={() => removeElement(item)}
                className="btn-remove"
              >
                Remove
              </button>
            </section>
          </li>
        ))}
      </ul>
      <div className="total_container">
        {" "}
        <h2 className="total_price">Total:{totalPrice}</h2>
      </div>
    </>
  );
};

export default BasketPage;
