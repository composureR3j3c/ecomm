import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AddItem() {

const dispatch=useDispatch()

  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemImage, setItemImage] = useState("");
  let history = useNavigate();

  function addItem(params) {
    var item={
      itemName:itemName,
      itemImage:itemImage,
      itemPrice:itemPrice
    }
    dispatch({type:'ADD_ITEM',payload:item})
    history('/')
  }

  return (
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6">
      <input
        type="text"
        className="form-control"
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => {setItemName(e.target.value)}}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Item Image"
        value={itemImage}
        onChange={(e) => {setItemImage(e.target.value)}}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Item Price"
        value={itemPrice}
        onChange={(e) => {setItemPrice(e.target.value)}}
      />
      <button onClick={addItem} className='btn btn-success'>ADD</button>
      </div>
    </div>
    </div>
  );
}
