import React from "react";
import { useSelector } from "react-redux";


export default function NavBar() {
const cartObj=useSelector(store=>store.cartReducer)

return (
    <div>
      <nav className="navbar navbar-expand-lg p-2 mb-5 ">
        <a className="navbar-brand justify-content-center" href="#">
        Min Alesh Terra
        </a>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav mx-auto ">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/additem">
                Add Item
              </a>
            </li>
          </ul>
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item">
              <a className="nav-link" href="/cart">
                Cart {cartObj.cartItems.length}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
