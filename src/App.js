import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Shipment from "./pages/shipment/Shipment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="products">
              <Route index element={<Product />} />
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="shipments">
              <Route index element={<Shipment />} />
              <Route path=":shipmentId" element={<Shipment />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
