import { useNavigate } from "react-router-dom";
import Headerdealer from "../component/Headerdealer";


function Completeorder() {
  const dealers = [
    {
      id: 1,
      name: "Order 1",
      phone: "000-000-0000",
      mail: "@twitter",
      Dob: "DD/MM/YYYY",
      aadharnum: "0000-0000-0000",
      aadharimg: "pdf",
      pancardnum: "ddddd",
      pancardimg: "pdf",
      drivingnum: "dddd",
      drivingimg: "pdf",
      vehiclenum: "num000",
      vehicletype: "2 wheeler",
      banknum: "000000",
      ifsc: "IFSCcode",
      bankuser: "acc user Name",
      address: "address",
      city: "city",
      state: "state",
      postcode: "000 000",
      nationality: "nationality",
    },
    {
      id: 2,
      name: "Order 2",
      phone: "000-000-0000",
      mail: "@twitter",
      Dob: "DD/MM/YYYY",
      aadharnum: "0000-0000-0000",
      aadharimg: "pdf",
      pancardnum: "ddddd",
      pancardimg: "pdf",
      drivingnum: "dddd",
      drivingimg: "pdf",
      vehiclenum: "num000",
      vehicletype: "2 wheeler",
      banknum: "000000",
      ifsc: "IFSCcode",
      bankuser: "acc user Name",
      address: "address",
      city: "city",
      state: "state",
      postcode: "000 000",
      nationality: "nationality",
    },
    {
      id: 3,
      name: "Order 3",
      phone: "000-000-0000",
      mail: "@twitter",
      Dob: "DD/MM/YYYY",
      aadharnum: "0000-0000-0000",
      aadharimg: "pdf",
      pancardnum: "ddddd",
      pancardimg: "pdf",
      drivingnum: "dddd",
      drivingimg: "pdf",
      vehiclenum: "num000",
      vehicletype: "2 wheeler",
      banknum: "000000",
      ifsc: "IFSCcode",
      bankuser: "acc user Name",
      address: "address",
      city: "city",
      state: "state",
      postcode: "000 000",
      nationality: "nationality",
    },
  ];

  const navigate = useNavigate();

  return (
 <>
 <Headerdealer/>
    <div className="container-fluid topbottom">
      <div className="card-box">
        <table className="table">
          <thead>
            <tr>
              <th>No:</th>
              <th>Order:</th>
              <th>Phone Number:</th>
              <th>Mail ID:</th>
            </tr>
          </thead>
          <tbody>
            {dealers.map((dealer) => (
              <tr key={dealer.id}>
                <th scope="row">{dealer.id}</th>
                <td
                style={{cursor:"pointer",color:"black"}}
                  onClick={() =>
                    navigate("/Completeorderdetail", { state: { dealer } })
                  }
                >
                  {dealer.name}
                </td>
                <td>{dealer.phone}</td>
                <td>{dealer.mail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
 </>
  );
}

export default Completeorder;
