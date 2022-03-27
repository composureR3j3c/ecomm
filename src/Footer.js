import React from "react";

export default function Footer() {
  return (
    <footer className='py-3' >
      <ul className="nav justify-content-center  pb-3 mb-2">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/additem" className="nav-link px-2 text-muted">
              Add Item
            </a>
          </li>
          <li className="nav-item">
            <a href="/cart" className="nav-link px-2 text-muted">
              Cart
            </a>
          </li>
        </ul>
      <p className="text-center pb-2">© 2022 Bereket, Inc</p>
    </footer>
    // <div class="">
      // <footer className="footer py-3 mt-4">
        
      //   <p id="copy" >
      //     © 2022 Bereket, Inc
      //   </p>
      // </footer>
    // </div>
  );
}
