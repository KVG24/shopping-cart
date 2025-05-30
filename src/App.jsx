import { useState } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { Outlet } from "react-router-dom";

function App() {
    const [itemsInCart, setItemsInCart] = useState([]);

    return (
        <>
            <NavigationBar itemCount={itemsInCart.length} />
            <Outlet context={{ itemsInCart, setItemsInCart }} />
        </>
    );
}

export default App;
