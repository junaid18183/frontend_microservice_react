import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./shipment.scss";

const Shipment = () => {
  return (
    <div className="shipment">
      <Sidebar />
      <div className="shipmentContainer">
        <Navbar />
        <div className="widgets">
        Shipment
        </div>
      </div>
    </div>
  );
};

export default Shipment;
