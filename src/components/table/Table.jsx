import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const product_header = ["Name","Description","Type", "Image", "Units","Price","Supplier","Available"];
for (const element of product_header) {
  console.log(element);
}

const List = ({type}) => {
  let data;
  switch (type) {
    case "product":
      const { products } = require("./fakeProductData");
      data = products
      break;
      case "shipment":
        const { shipments } = require("./fakeProductData");
        data = shipments
        break;
        default:
          break;
  }
  return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="tableCell">Name</TableCell>
          <TableCell className="tableCell">Description</TableCell>
          <TableCell className="tableCell">Type</TableCell>
          <TableCell className="tableCell">Image</TableCell>
          <TableCell className="tableCell">Units</TableCell>
          <TableCell className="tableCell">Available</TableCell>
          <TableCell className="tableCell">Supplier</TableCell>
          <TableCell className="tableCell">Available</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell className="tableCell">{row.name}</TableCell>
            <TableCell className="tableCell">{row.desc}</TableCell>
            <TableCell className="tableCell">{row.type}</TableCell>
            <TableCell className="tableCell">
              <div className="cellWrapper">
                <img src={row.banner} alt="" className="image" />
                {row.product}
              </div>
            </TableCell>

            <TableCell className="tableCell">{row.unit}</TableCell>
            <TableCell className="tableCell">{row.price}</TableCell>
            <TableCell className="tableCell">{row.suplier}</TableCell>
            <TableCell className="tableCell">{row.unit}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
};

export default List;
