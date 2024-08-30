
import { useLocation } from 'react-router-dom';
import Headerdealer from '../component/Headerdealer';

function Completeorderdetail() {
    const location = useLocation();
    const { dealer } = location.state || {};

    if (!dealer) {
        return <p>No dealer information available.</p>;
    }

    return (
        <>
        <Headerdealer/>
        <div className="container-fluid topbottom">
           <h3 style={{fontWeight:"bold"}}>Dealer Details</h3>
            <p><strong>ID:</strong> {dealer.id}</p>
            <p><strong>Name:</strong> {dealer.name}</p>
            <p><strong>Phone:</strong> {dealer.phone}</p>
            <p><strong>Mail:</strong> {dealer.mail}</p>
            <p><strong>DoB:</strong> {dealer.Dob}</p>
            <p><strong>Aadhar Card Number:</strong> {dealer.mail}</p>
            <p><strong>Aadhar Card Pdf:</strong> {dealer.aadharimg}</p>
            <p><strong>Pancard Number:</strong> {dealer.pancardnum}</p>
            <p><strong>Pancard Pdf:</strong> {dealer.pancardimg}</p>
            <p><strong>Driving Number:</strong> {dealer.drivingnum}</p>
            <p><strong>Driving Pdf:</strong> {dealer.drivingimg}</p>
            <p><strong>Vehicle Number:</strong> {dealer.vehiclenum}</p>
            <p><strong>Vehicle Type:</strong> {dealer.vehicletype}</p>
            <p><strong>Bank Number:</strong> {dealer.banknum}</p>
            <p><strong>IFSC code:</strong> {dealer.ifsc}</p>
            <p><strong>Bank User Name:</strong> {dealer.bankuser}</p>
            <p><strong>Address:</strong> {dealer.address}</p>
            <p><strong>City:</strong> {dealer.city}</p>
            <p><strong>State:</strong> {dealer.state}</p>
            <p><strong>Postcode:</strong> {dealer.postcode}</p>
            <p><strong>Nationality:</strong> {dealer.nationality}</p>      
        </div>
        </>
    );
}

export default Completeorderdetail;
