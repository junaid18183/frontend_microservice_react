import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";


const List = () => {
  const getVideos = async () => {
    try {
      const res = await axios.get("api/products/1");
    } catch (err) {}
  };
  const rows = getVideos();
  console.log(rows)
  // return ()
    // <TableContainer component={Paper} className="table">
    //   <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell className="tableCell">Product</TableCell>
    //         <TableCell className="tableCell">Status</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {rows.map((row) => (
    //         <TableRow key={row.id}>
    //           <TableCell className="tableCell">{row.id}</TableCell>
    //           <TableCell className="tableCell">
    //             <div className="cellWrapper">
    //               <img src={row.img} alt="" className="image" />
    //               {row.product}
    //             </div>
    //           </TableCell>
    //           <TableCell className="tableCell">{row.name}</TableCell>
    //           <TableCell className="tableCell">
    //             <span className={`status ${row.status}`}>{row.status}</span>
    //           </TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
  // );
};

export default List;
