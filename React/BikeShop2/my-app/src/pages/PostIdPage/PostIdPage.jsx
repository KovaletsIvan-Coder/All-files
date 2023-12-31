import React, { useContext, useState } from "react";
import "./PostIdPage.css";
import { BasketContext, ulBasketContext } from "../../context";

const PostIdPage = () => {
  let { itemInBasket, setItemInBasket } = useContext(BasketContext);
  const { elementsInBasket, setElementsInBasket } = useContext(ulBasketContext);
  const [wheelsSelect, setWheelsSelect] = useState("26");
  const [frameSizeSelect, setFrameSizeSelect] = useState("S");
  const [identifier, setIdentifier] = useState(100);
  //100 для того щоб значення ідентифікатора на сторінці конкретного велосипеда відрізнялось від значення ідентифікатора на загальній сторінці байків
  //інакше це призведе до багу при видаленні елемента з кошика

  const idBike = {
    name: localStorage.getItem("nameBike"),
    price: localStorage.getItem("priceBike"),
    src: localStorage.getItem("srcBike"),
    id: localStorage.getItem("idBike"),
    description: localStorage.getItem("descriptionBike"),
    identifier: identifier,
    wheelsSize: wheelsSelect,
    frameSize: frameSizeSelect,
  };
  const updateBasketQuantity2 = (e) => {
    e.stopPropagation();
    setItemInBasket((itemInBasket += 1));
    setIdentifier(identifier + 1);

    localStorage.setItem("itemInBasket", itemInBasket);

    // //set info about bike for basket

    setElementsInBasket((prevElements) => [...prevElements, idBike]);
  };
  console.log(wheelsSelect);
  console.log(frameSizeSelect);
  return (
    <div className="main_container">
      <div className="img_container">
        <img className="img" src={idBike.src} alt="a" />
      </div>
      <div className="bike_info_container">
        <h1>{idBike.name}</h1>
        <p>{idBike.description}</p>
        <form className="size_form">
          <p>Wheels: </p>
          <select
            className="wh_size_select"
            onClick={(e) => e.stopPropagation()}
            value={wheelsSelect}
            onChange={(event) => setWheelsSelect(event.target.value)}
          >
            <option value="26">26</option>
            <option value="27.5">27.5</option>
            <option value="29">29</option>
          </select>

          <p className="p_size">Size: </p>
          <select
            className="size_select"
            onClick={(e) => e.stopPropagation()}
            value={frameSizeSelect}
            onChange={(event) => setFrameSizeSelect(event.target.value)}
          >
            <option>S</option>
            <option>M</option>
            <option>L</option>
          </select>
        </form>

        <h4>Price: {idBike.price}$</h4>
        <button className="buy_button" onClick={updateBasketQuantity2}>
          Add To Basket
        </button>
      </div>
    </div>
  );
};

export default PostIdPage;
