import React from "react";
import ItemBasket from "./ItemBasket";

const Basket = (props) => {
  return (
    <div>
      <div>
        {props.overlayProp.length > 0 ? (
          <div
            className="d-flex flex-row flex-wrap justify-content-evenly 
          py-3 row-cols-md-3 row-cols-sm-2 text-center"
          >
            {props.overlayProp.map((obj) => {
              return (
                <div className="col">
                  <ItemBasket
                    key={obj.id}
                    id={obj.id}
                    title={obj.title}
                    price={obj.price}
                    img={obj.img}
                    deleteItems={props.deleteItems}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <h1 className="col-md-8 offset-md-2">Корзина пуста</h1>
        )}
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <p>Итог</p>
            <p>{props.totalPrice}</p>
            <button type="button" className="w-10 btn btn-lg btn-primary">
              Забронировать
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
