import React, { useState } from "react";
import logo from "../assets/image/logonew.png";

const Logindealer = () => {
  const [activeLogin, setActiveLogin] = useState("user"); // State to track which login box is active

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="container-fluid p-0 m-0">
      <div className="login-container">
        <div className="col-lg-6 col-md-4 col-sm-4">
          <div className="login-left ps-3 pe-3">
            <img src={logo} className="logonew" alt="Logo" />
            <span className="logonew-text">RECYCHBS</span>
          </div>
        </div>
        <div className="col-lg-6 col-md-8 col-sm-8">
          <div className="login-right">
            <div style={{ display: "flex" }}>
              <div
                onClick={() => setActiveLogin("user")}
                style={{ cursor: "pointer",marginRight:"50px", fontWeight: activeLogin === "user" ? "bold" : "normal" }}
              >
                <p>User Login</p>
              </div>
              <div
                onClick={() => setActiveLogin("dealer")}
                style={{ cursor: "pointer", fontWeight: activeLogin === "dealer" ? "bold" : "normal" }}
              >
                <p>Dealer Login</p>
              </div>
            </div>
            {activeLogin === "user" && (
              <div className="login-box foruser">
                <h2 className="login-heading">LOGIN</h2>
                <form onSubmit={handleSubmit}>
                  <label className="login-label">
                    Username:
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="login-input"
                      required
                    />
                  </label>
                  <label className="login-label">
                    Password:
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="login-input"
                      required
                    />
                  </label>
                  <a href="/forgot-password" className="forgot-password-link">
                    Forgot Password?
                  </a>
                  <button
                    type="submit"
                    style={{ textDecoration: "none" }}
                    className="login-button"
                  >
                    Login
                  </button>
                </form>

                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "700",
                    marginTop: "20px",
                    textAlign: "center",
                  }}
                >
                  New User?{" "}
                  <a href="" style={{ textDecoration: "none" }}>
                    Register
                  </a>
                </p>
              </div>
            )}
            {activeLogin === "dealer" && (
              <div className="login-box fordealer">
                <h2 className="login-heading">LOGIN</h2>
                <form onSubmit={handleSubmit}>
                  <label className="login-label">
                    Dealer Name:
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="login-input"
                      required
                    />
                  </label>
                  <label className="login-label">
                    Password:
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="login-input"
                      required
                    />
                  </label>
                  <a href="/forgot-password" className="forgot-password-link">
                    Forgot Password?
                  </a>
                  <button
                    type="submit"
                    style={{ textDecoration: "none" }}
                    className="login-button"
                  >
                    Login
                  </button>
                </form>

                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "700",
                    marginTop: "20px",
                    textAlign: "center",
                  }}
                >
                  New User?{" "}
                  <a href="" style={{ textDecoration: "none" }}>
                    Register
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logindealer;
