import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Table from "../../components/table/Table";
import axios from "axios";
import "./product.scss";


const Product = () => {
  const [setProducts] = [];
  const getProducts = async () => {
    try {
      const res = await axios.get("api/products/1");
      setProducts(res.data);
    } catch (err) {}
  };
  const rows = getProducts();
  return (
    <div className="product">
      <Sidebar />
      <div className="productContainer">
        <Navbar />
        {rows}
        {/* <Table /> */}
      </div>
    </div>
  );
};

export default Product;
