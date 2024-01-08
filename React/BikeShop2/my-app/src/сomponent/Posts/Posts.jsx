import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Posts.css";
import { BasketContext, ulBasketContext } from "../../context";

const Posts = (props) => {
  let { itemInBasket, setItemInBasket } = useContext(BasketContext);
  const { elementsInBasket, setElementsInBasket } = useContext(ulBasketContext);
  const [identifier, setIdentifier] = useState(1);
  const [wheelsSelect, setWheelsSelect] = useState("26");
  const [frameSizeSelect, setFrameSizeSelect] = useState("S");

  const updateBasketQuantity = (e) => {
    e.stopPropagation();
    setItemInBasket((itemInBasket += 1));
    localStorage.setItem("itemInBasket", itemInBasket);

    // //set info about bike for basket
    setIdentifier(identifier + 1);
    let newElement = {
      name: props.post.name,
      src: props.post.src,
      price: props.post.price,
      identifier: identifier,
      wheelsSize: wheelsSelect,
      frameSize: frameSizeSelect,
    };
    setElementsInBasket((prevElements) => [...prevElements, newElement]);
    console.log(elementsInBasket);
  };
  const router = useNavigate();
  const routeToIdPage = () => {
    router(`/posts/${props.post.id}`);
    localStorage.setItem("nameBike", props.post.name);
    localStorage.setItem("idBike", props.post.id);
    localStorage.setItem("srcBike", props.post.src);
    localStorage.setItem("altBike", props.post.alt);
    localStorage.setItem("priceBike", props.post.price);
    localStorage.setItem("descriptionBike", props.post.description);
  };
  return (
    <>
      <div className="bike_icon" onClick={routeToIdPage}>
        <img className="bike_img" src={props.post.src} alt={props.post.alt} />

        <div className="bike_information">
          <div>{props.post.name}</div>
          <div>Price: {props.post.price}$</div>

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

          <button onClick={updateBasketQuantity} className="buy_button">
            Add To Basket
          </button>
        </div>
      </div>
    </>
  );
};

export default Posts;
