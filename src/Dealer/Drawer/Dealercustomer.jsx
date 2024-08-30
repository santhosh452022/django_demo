import { useNavigate } from "react-router-dom";
import Headerdealer from "../../component/Headerdealer";


function Dealercustomer() {

  const navigate = useNavigate();

  return (
   <>
   <Headerdealer/>
    <div className="topbottom">
     <p>Customer</p>
    </div>
    
   </>
  );
}

export default Dealercustomer;
