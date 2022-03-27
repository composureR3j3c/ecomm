import React, { useState } from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

export default function Items() {
  const itemsObj = useSelector((store) => store.itemsReducer);

  const [itemList, setItemList] = useState(itemsObj.items);
  const [searchKey, setSearchKey] = useState("");

  function filterItems() {
    const duplicatedList = itemsObj.items;
    const filteredList = duplicatedList.filter((item) =>
      item.itemName.toLowerCase().includes(searchKey.toLowerCase())
    );
    setItemList(filteredList);
  }
  const itemData = itemList.map((item) => {
    return (
      <div className="col-md-3">
        <Item item={item}></Item>
      </div>
    );
  });
  return (
    <div className="container">
      {/* Total Items: {itemList.length} */}
      <input
        type="text"
        className="form-control mb-5"
        placeholder="Search Items"
        value={searchKey}
        onChange={(e) => {
          setSearchKey(e.target.value);
        }}
        onKeyUp={filterItems}
      />
      <div className="row">{itemData}</div>
    </div>
  );
}
