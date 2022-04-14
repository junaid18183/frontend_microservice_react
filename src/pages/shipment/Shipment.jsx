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
import "./shipment.scss";


const Shipment = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    const getShipments = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("/api/shipments");
        setShipments(res.data);
      } catch (err) {}
      setIsLoading(false);
    };
    getShipments();
  }, []);
  return (
    <div className="shipment">
      <Sidebar />
      <div className="shipmentContainer">
        <Navbar />
        <div className="widgets">
        Shipment
        </div>
        <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="tableCell">Shipment ID</TableCell>
          <TableCell className="tableCell">Manager</TableCell>
          <TableCell className="tableCell">WareHouse</TableCell>
          <TableCell className="tableCell">Shipped Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {shipments.map((row) => (
          <TableRow key={row.id}>
            <TableCell className="tableCell">{row.shipment}</TableCell>
            <TableCell className="tableCell">{row.manager}</TableCell>
            <TableCell className="tableCell">{row.warehouse}</TableCell>
            <TableCell className="tableCell">{row.created_on}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
      </div>
    </div>
  );
};

export default Shipment;
