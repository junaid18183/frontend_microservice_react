import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Table from "../../components/table/Table";
import axios from "axios";
import "./product.scss";


const Product = () => {
  return (
    <div className="product">
      <Sidebar />
      <div className="productContainer">
        <Navbar />
        <div className="title">
        Products
        </div>
        <Table type="product"/>
      </div>
    </div>
  );
};

export default Product;
