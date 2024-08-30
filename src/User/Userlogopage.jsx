import { MdArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Header from "../component/Header";

function Userlogopage() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="container-fluid topbottom-user">
        <div className="row">
          <div className="col-4 col-lg-4 col-md-4 col-sm-12">
            <div
              class="d-flex justify-content-between align-items-center userlogo-card"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/Userlanguage")}
            >
              <span
                style={{ color: "#000", fontWeight: "800", fontSize: "20px" }}
              >
                Language
              </span>
              <MdArrowForwardIos className="orders-button-icon" />
            </div>
          </div>
          <div className="col-4 col-lg-4 col-md-4 col-sm-12">
            <div
              class="d-flex justify-content-between align-items-center userlogo-card"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/Usereditdetail")}
            >
              <span
                style={{ color: "#000", fontWeight: "800", fontSize: "20px" }}
              >
                Edit Details
              </span>
              <MdArrowForwardIos className="orders-button-icon" />
            </div>
          </div>
          <div className="col-4 col-lg-4 col-md-4 col-sm-12">
            <div
              class="d-flex justify-content-between align-items-center userlogo-card"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/Userqns")}
            >
              <span
              
                style={{ color: "#000", fontWeight: "800", fontSize: "20px" }}
              >
                Questions & Answer
              </span>
              <MdArrowForwardIos className="orders-button-icon" />
            </div>
          </div>
          <div className="col-4 col-lg-4 col-md-4 col-sm-12">
            <div
              class="d-flex justify-content-between align-items-center userlogo-card"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              <span
                style={{ color: "#000", fontWeight: "800", fontSize: "20px" }}
              >
                Terms & Condition
              </span>
              <MdArrowForwardIos className="orders-button-icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Userlogopage;
