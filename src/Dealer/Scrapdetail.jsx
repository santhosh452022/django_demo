import { useNavigate } from "react-router-dom";
import Headerdealer from "../component/Headerdealer";


function Scrapdetail() {
  const navigate = useNavigate();

  return (
    <>
     <Headerdealer />
      <div className="container-fluid topbottom"> 
        <div className="scrapdetail-container gap-2">
          <div>
            <span className="scrapdetail-label">Address : </span>
            <span>Enter dealer address</span>
          </div>
          <div>
            <span className="scrapdetail-label">Phone Number : </span>
            <span>7878787878</span>
          </div>
          <span className="scrapdetail-label">Scrap Type:</span>
          <select style={{ height: "40px" }}>
            <option selected>Select Scrap Type</option>
            <option>type 1</option>
            <option>type 2</option>
            <option>type 3</option>
          </select>
          <span className="scrapdetail-label">Scrap Condition:</span>
          <select style={{ height: "40px" }}>
            <option selected>Select Scrap Condition</option>
            <option>type 1</option>
            <option>type 2</option>
            <option>type 3</option>
          </select>
          <span className="scrapdetail-label">Weight:</span>
          <input style={{ height: "40px" }} />
          <span className="scrapdetail-label">Amount:</span>
          <input style={{ height: "40px" }} />
          <div
            style={{
              height: "170px",
              backgroundColor: "#ded9d9",
              display: "flex",
              flexDirection: "column",
              padding: "20px 10px",
              justifyContent: "space-between",
            }}
          >
            <span style={{ marginBottom: "10px" }}>Commands Query</span>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input style={{ marginRight: "10px", flex: 1 }} />
              <button>Send</button>
            </div>
          </div>

          <div className="fixed-footer">
            <div className="button">SUBMIT</div>
            <div className="button" onClick={()=>navigate("/Homedealer")}>CANCEL</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Scrapdetail;
