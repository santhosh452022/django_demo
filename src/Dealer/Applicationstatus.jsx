import React, { useState,useEffect } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import Headerdealer from "../component/Headerdealer";
import Bottomdealer from "../component/Bottomdealer";

const Applicationstatus = () => {



  // const [status, setStatus] = useState('waiting'); // default to 'waiting' if `sat` is undefined
const [showExtraDataInput, setShowExtraDataInput] = useState(false);

    // setStatus((prevStatus) => {
    //   switch (prevStatus) {
    //     case 'waiting':
    //       return 'approved';
    //     case 'approved':
    //       return 'extradata';
    //     case 'extradata':
    //       return 'waiting';
    //     default:
    //       return 'waiting';
    //   }
    // });
  // };

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:8000/FetchStatusActive/')
  //     .then(response => response.json())
  //     .then(data =>{ 
  //       current_status = data[0].application_status;
  //       console.log(current_status);
        
  //       // setStatus(current_status);
  //   })
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);



  const [status, setStatus] = useState('waiting'); // Initial default value

  useEffect(() => {
    // Fetch status from Django when the component loads
    const fetchStatus = async () => {
      try {
        const response = await fetch('http://localhost:8000/FetchStatusActive/'); // Django API endpoint
        const data = await response.json();
        setStatus(data[0].application_status); // Set the status based on the fetched value

        console.log(data[0].application_status);
        (data.status);
      } catch (error) {
        console.error('Error fetching status:', error);
      }
    };

    fetchStatus();
  }, []); 

  // console.log(data);
//   console.log(data.length);

//   const items=[]
  
// // Loop based on the response data length
// for (let i = 0; i < data.length; i++) {
//   items.push(
//    data[i].application_status,
//   );
// }

// console.log(items[0]);
//  let sat = items[0];

//  console.log("This is sat",sat);
 


  // setStatus(sat);

  // Update showExtraDataInput based on status
  React.useEffect(() => {
    setShowExtraDataInput(status === 'extradata');
  }, [status]);

  return (

  <>
  <Headerdealer/>
    <div className="container-fluid" style={{ height: "100vh", width: "100%",paddingTop:"100px" }}>
      <div className="">
        <span
          style={{
            color: "#000",
            fontSize: "25px",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          Application Status
        </span>
      </div>
      <div className="d-flex flex-column mt-4">
        <div className="d-flex align-items-center">
          <AiOutlineCheckCircle style={{ height: "30px", width: "30px", color: "green" }} />
          <p style={{ marginLeft: "10px",fontSize:"18px",fontWeight:"700" }} className="pt-3">
            Your Details Submitted Successfully
          </p>
        </div>
        <div className="line"></div>
        <div
          className="d-flex align-items-center"
          style={{ cursor: "pointer" }}
          // onClick={toggleStatus}
        >
          {status === 'approved' ? (
            <>
              <AiOutlineCheckCircle style={{ height: "30px", width: "30px", color: "green" }} />
              <p style={{ marginLeft: "10px",fontSize:"18px",fontWeight:"700" }} className="pt-3">
                Approved
              </p>
            </>
          ) : status === 'extradata' ? (
            <>
              <AiOutlineCloseCircle style={{ height: "30px", width: "30px", color: "red" }} />
              <p style={{ marginLeft: "10px",fontSize:"18px",fontWeight:"700" }} className="pt-3">
                Need Extra data
              </p>
            </>
          ) : (
            <>
              <AiOutlineCloseCircle style={{ height: "30px", width: "30px", color: "red" }} />
              <p style={{ marginLeft: "10px",fontSize:"18px",fontWeight:"700" }} className="pt-3">
                Waiting for Response...
              </p>
            </>
          )}
        </div>
        {showExtraDataInput && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              marginLeft:"30px",
              marginTop:"30px"
            }}
          >
            <div>
              <p>Please Upload your following information and data</p>
              <div>
                <input type="text" placeholder="Enter your data here..." />
              </div>
              <div
                style={{
                  display: "flex",
                  borderRadius: "5px",
                  border: "2px dotted #777",
                  padding: "10px",
                  marginTop: "10px",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <input
                  type="file"
                  id="file-upload"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    opacity: 0,
                    cursor: "pointer",
                  }}
                />
                <label
                  htmlFor="file-upload"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#777",
                    cursor: "pointer",
                    paddingTop:"30px",
                    paddingBottom:"30px"
                  }}
                >
                  Choose Your Data
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    <Bottomdealer/>
  </>
  );
};

export default Applicationstatus;
