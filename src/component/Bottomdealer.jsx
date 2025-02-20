import React, { useState } from "react";
import { BiSolidUserAccount } from "react-icons/bi";
import { FaHome, FaPaypal, FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoHelpBuoyOutline, IoMenuSharp } from "react-icons/io5";
import { LuListOrdered } from "react-icons/lu";
import { RiCustomerService2Line, RiSecurePaymentLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Bottomdealer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <div>
      <div
        className="container-fluid bottom-fixed"
        style={{
          width: "100%",
          backgroundColor: "#000",
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
      >
        <div className="col-3">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer"
            }}
            onClick={toggleDrawer}
          >
            <IoMenuSharp className="icons-bottom" />
            <p className="icons-bottom-text p-0 m-0">Menu</p>
          </div>
        </div>
        <div className="col-3">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer"
            }}
          >
            <FaHome className="icons-bottom" />
            <p className="icons-bottom-text p-0 m-0">Home</p>
          </div>
        </div>
        <div className="col-3">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer"
            }}
          >
            <FaUser className="icons-bottom text-center" />
            <p className="icons-bottom-text p-0 m-0">User</p>
          </div>
        </div>
        <div className="col-3">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer"
            }}
          >
            <FaPaypal className="icons-bottom text-center" />
            <p className="icons-bottom-text p-0 m-0">Pay</p>
          </div>
        </div>
      </div>

      <div
        className={`drawer ${drawerOpen ? 'drawer-open' : ''}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "250px",
          height: "100%",
          backgroundColor: "#333",
          color: "#fff",
          transition: "transform 0.3s ease",
          transform: drawerOpen ? "translateX(0)" : "translateX(-100%)",
          zIndex: 1000,
          justifyContent:"space-between",
          display:"flex",
          flexDirection:"column"
        }}
      >
        <div>
        <div style={{padding:"40px 20px", borderBottom:"2px solid #777",display:"flex",justifyContent:"space-between"}}>
          <span style={{fontWeight:"800"}}>RECYCHBS</span>
          <RxCross2 style={{height:"20px",width:"20px",cursor:"pointer",}} onClick={()=>setDrawerOpen(false)}/>
          </div>
          <div>
          <div className="drawer-menu" onClick={()=>navigate("/Dealerorder")}>
            <LuListOrdered style={{height:"20px",width:"20px",marginRight:"10px"}}/>
            <span>Your Order</span>
            </div>
          <div className="drawer-menu" onClick={()=>navigate("/Dealeraccount")}>
            <BiSolidUserAccount style={{height:"20px",width:"20px",marginRight:"10px"}}/>
            <span>Your Account</span>
            </div>
          <div className="drawer-menu" onClick={()=>navigate("/Dealerpayment")}>
            <RiSecurePaymentLine style={{height:"20px",width:"20px",marginRight:"10px"}}/>
            <span>Your Payment</span>
            </div>
          <div className="drawer-menu" onClick={()=>navigate("/Dealercustomer")}>
            <RiCustomerService2Line style={{height:"20px",width:"20px",marginRight:"10px"}}/>
            <span>Customer Service</span>
            </div>
          <div className="drawer-menu" onClick={()=>navigate("/Dealerhelp")}>
            <IoMdHelpCircleOutline style={{height:"20px",width:"20px",marginRight:"10px"}}/>
            <span>Help</span>
            </div>         
          </div>
        </div>
          <div>
        <div style={{display:"flex",alignItems:"center",marginBottom:"10px",padding:"20px 20px"}}>
            <FiLogOut style={{height:"20px",width:"20px",marginRight:"10px"}}/>
            <span>LogOut</span>
        </div>

        </div>
      </div>
   
      {drawerOpen && (
        <div
          className="overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 500,
          }}
          onClick={toggleDrawer}
        />
      )}
    </div>
  );
};

export default Bottomdealer;
