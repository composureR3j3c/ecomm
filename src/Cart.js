import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Cart() {
  const cartObj = useSelector((store) => store.cartReducer);
  const dispatch = useDispatch();

  const tableBody = cartObj.cartItems.map((item) => {
    return (
      <tr>
        <td>{item.itemName}</td>
        <td>{item.itemPrice}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch({ type: "DELETE_FROM_CART", payload: item });
            }}
          >
            DELETE
          </button>
        </td>
      </tr>
    );
  });
  return (
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <table className="table table-dark table-bordered col-md-8">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Item Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{tableBody}</tbody>
        </table>
      </div>
    </div>
    </div>
  );
}
