import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./NavBar";
import AddItem from "./AddItem";
import Cart from "./Cart";
import Footer from "./Footer";
import Items from "./Items";

import { Provider } from "react-redux";

import { Routes, Route } from "react-router-dom";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

import { createStore } from "redux";
import rootReducer from "./reducers/rootreducers";

const persistconfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistconfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Items />} />
            <Route exact path="/additem" element={<AddItem />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>

          
        </PersistGate>
      </Provider>
      <Footer />
    </div>
  );
}

export default App;
