import React from "react";

const ItemBasket = (props) => {
  return (
    <div className="col px-3 py-3">
      <div className="card md-6 rounded">
        <div className="card-header py-2 px-3">
          <h5>{props.title}</h5>
          <img className="rounded" width={"50%"} src={props.img}></img>
          <h5>
            <br />
            <span>{props.price}</span>
          </h5>
          <button
            type="button"
            className="w-100 btn btn-lg btn-primary"
            onClick={() => props.deleteItems(props.id)}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemBasket;
