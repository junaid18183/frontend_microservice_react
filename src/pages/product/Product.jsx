import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import "./product.scss";


const Product = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("/api/products");
        setProducts(res.data);
      } catch (err) {}
      setIsLoading(false);
    };
    getProducts();
  }, []);
  return (
    <div className="product">
      <Sidebar />
      <div className="productContainer">
        <Navbar />
        <div className="title">
        Products
        </div>
        <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="tableCell">Name</TableCell>
          <TableCell className="tableCell">Description</TableCell>
          <TableCell className="tableCell">Type</TableCell>
          {/* <TableCell className="tableCell">Image</TableCell> */}
          <TableCell className="tableCell">Units</TableCell>
          <TableCell className="tableCell">Available</TableCell>
          <TableCell className="tableCell">Supplier</TableCell>
          {/* <TableCell className="tableCell">Available</TableCell> */}
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((row) => (
          <TableRow key={row.id}>
            <TableCell className="tableCell">{row.name}</TableCell>
            <TableCell className="tableCell">{row.desc}</TableCell>
            <TableCell className="tableCell">{row.type}</TableCell>
            {/* <TableCell className="tableCell">
              <div className="cellWrapper">
                <img src={row.banner} alt="" className="image" />
                {row.product}
              </div>
            </TableCell> */}

            <TableCell className="tableCell">{row.unit}</TableCell>
            <TableCell className="tableCell">{row.price}</TableCell>
            <TableCell className="tableCell">{row.suplier}</TableCell>
            {/* <TableCell className="tableCell">{row.available}</TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
      </div>
    </div>
  );
};

export default Product;
