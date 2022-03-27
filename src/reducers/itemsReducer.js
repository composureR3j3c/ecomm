const initData = {
  items: [
    {
      itemName: "Phone 12.0",
      itemImage:
        "https://m.media-amazon.com/images/I/71sITK2GB1L._AC_SY550_.jpg",
      itemPrice: "14270.99",
    },
    {
      itemName: "Samsung A21s",
      itemImage:
        "https://m.media-amazon.com/images/I/71sITK2GB1L._AC_SY550_.jpg",
      itemPrice: "14270.99",
    },
    {
      itemName: "realme Narzo 50A",
      itemImage:
        "https://rukminim1.flixcart.com/image/416/416/ktx9si80/mobile/q/a/c/narzo-50a-rmx3430-realme-original-imag75kybaer8scz.jpeg?q=70",
      itemPrice: "14270.99",
    },
    {
      itemName: "REDMI 9i Sport",
      itemImage:
        "https://rukminim1.flixcart.com/image/312/312/ku04o7k0/mobile/m/w/p/9i-sport-mzb0a0yin-redmi-original-imag785ryfspqg3a.jpeg?q=70",
      itemPrice: "8,999",
    },
    {
      itemName: "POCO C31",
      itemImage:
        "https://rukminim1.flixcart.com/image/416/416/ku4ezrk0/mobile/b/o/m/c31-mzb0a0min-poco-original-imag7bzqxekkpkrv.jpeg?q=70",
      itemPrice: "19,499",
    },
    {
      itemName:"Light Blue Shirt",
      itemImage:
        "https://5.imimg.com/data5/YJ/BO/MY-10973479/mens-designer-casual-shirt-500x500.jpg",
      itemPrice:"900"
    }
  ],
};

function ItemsReducer(state = initData, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
  }
  return state;
}

export default ItemsReducer;
