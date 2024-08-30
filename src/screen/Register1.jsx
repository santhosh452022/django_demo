import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import logo from "../assets/image/logotrans.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
 
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    state: "",
    nationalty: "",
    pincode: "",
    terms: false,
  });
 
 
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');
 
 
  const [passwordError, setPasswordError] = useState("");
  const [contactError, setContactError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [otpInput, setOtpInput] = useState("");
  const [otp, setOtp] = useState(""); // For storing the generated OTP
 
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
 
    // Check if passwords match
    if (name === "password" || name === "confirmPassword") {
      if (formData.password !== formData.confirmPassword) {
        setPasswordError("Passwords do not match");
      } else {
        setPasswordError("");
      }
    }
 
    // Validate contact number
    if (name === "contact") {
      if (value.length <= 9 || isNaN(value)) {
        setContactError("Invalid phone number");
      } else {
        setContactError("");
      }
    }
 
    // Validate email
    if (name === "email") {
      if (!value.includes("@")) {
        setEmailError("Invalid email");
      } else {
        setEmailError("");
      }
    }
 
    // Validate password
    if (name === "password") {
      if (value.length < 8) {
        setPasswordError("Password must be at least 8 characters.");
      } else {
        setPasswordError("");
      }
    }
  };
 
  const navig = useNavigate();
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
  fetch('http://localhost:8000/register-form/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (response.ok) {
        return response.json().then(data => {
          setMessage(data.message);
          setStatus(data.status);
          navig('/')
        });
      } else {
        return response.json().then(data => {
          setError(data.error);
          navig('/Register')
        });
      }
    })
    .catch(error => {
      console.log("Error:", error);
    });
 
 
   
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match");
    } else if (!captchaValue) {
      alert("Please complete the reCAPTCHA");
    } else if (contactError || emailError || passwordError) {
      alert("Please correct the errors before submitting.");
    }
    else {
      setPasswordError("");
 
      // Send OTP to the user's contact number
    //   const otpResponse = await fetch("/api/send-otp", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ contact: formData.contact }),
    //   });
 
    //   if (otpResponse.ok) {
    //     const { otp: generatedOtp } = await otpResponse.json();
    //     setOtp(generatedOtp);
    //     setOtpSent(true);
    //   } else {
    //     alert("Failed to send OTP. Please try again.");
    //   }
    }
  };
 
  // const handleOtpSubmit = async (e) => {
  //   e.preventDefault();
  //   if (otpInput === otp) {
  //     alert("Registration successful!");
  //     // You can also navigate to another page if needed
  //     navig("/");
  //   } else {
  //     setOtpError("Invalid OTP. Please try again.");
  //   }
  // };
 
  const isFormValid = () => {
    return (
      formData.name &&
      formData.contact &&
      formData.email &&
      formData.password &&
      formData.confirmPassword &&
      formData.address &&
      formData.city &&
      formData.state &&
      formData.nationalty &&
      formData.pincode &&
      formData.terms &&
      formData.password === formData.confirmPassword &&
      captchaValue &&
      !contactError &&
      !emailError
    );
  };
 
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordVisible1, setIsPasswordVisible1] = useState(false);
 
  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
 
  const handleTogglePasswordVisibility1 = () => {
    setIsPasswordVisible1(!isPasswordVisible1);
  };
 
  return (
    <div
      className="container-fluid m-0 p-0"
      style={{
        display: "flex",
        height: "100%",
        backgroundColor: "#000",
        width: "100%",
      }}
    >
      <div className="camp">
        <div className="loginpage">
          <div className="formbox">
            <div className="imgtop">
              <img src={logo} style={{ width: "70px", height: "70px" }} />
            </div>
            <h2 style={{ fontWeight: "600", fontSize: "24px" }}>Register</h2>
            <p style={{ fontWeight: "500", fontSize: "15px" }} className="p-0">
              Get access to Recychbs by creating an account
            </p>
            {otpSent ? (
              <form onSubmit={handleOtpSubmit}>
                <label className="HeadText">Enter OTP:</label>
                <input
                  type="text"
                  name="otpInput"
                  value={otpInput}
                  onChange={(e) => setOtpInput(e.target.value)}
                  required
                  className="inputfield"
                />
                {otpError && <p className="error">{otpError}</p>}
                <button type="submit" className="submit mt-3">
                  Verify OTP
                </button>
              </form>
            ) : (
              <form onSubmit={handleSubmit}>
                <label className="HeadText m-0">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="inputfield"
                />
                   <div>
                  <label className="HeadText">Address:</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="inputfield"
                  />
                  <div className="input-box">
                    <div className="input-wrapper">
                      <label className="HeadText">City:</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="inputfield"
                      />
                    </div>
                    <div className="input-wrapper">
                      <label className="HeadText">State:</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="inputfield"
                      />
                    </div>
                  </div>
                  <div className="input-box">
                    <div className="input-wrapper">
                      <label className="HeadText">Pin Code:</label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        required
                        className="inputfield"
                      />
                    </div>
                    <div className="input-wrapper">
                      <label className="HeadText">Nationalty:</label>
                      <input
                        type="text"
                        name="nationalty"
                        value={formData.nationalty}
                        onChange={handleChange}
                        required
                        className="inputfield"
                      />
                    </div>
                  </div>
                </div>
                <div className="input-box">
                <div className="input-wrapper">
                    <label className="HeadText">Email Address:</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="inputfield"
                    />
                    <p className="error-warning">{emailError}</p>
                  </div>
                  <div className="input-wrapper">
                    <label className="HeadText">Contact Number:</label>
                    <input
                      type="text"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      required
                      className="inputfield"
                    />
                    <p className="error-warning">{contactError}</p>
                  </div>
                </div>
                <div className="input-box">
                  <div className="input-wrapper">
                    <label className="HeadText">Password:</label>
                    <input
                      type={isPasswordVisible1 ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className="inputfield"
                    />
                    <div
                      className="password-icon"
                      onClick={handleTogglePasswordVisibility1}
                    >
                      {isPasswordVisible1 ? <FaEye /> : <FaEyeSlash />}
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <label className="HeadText">Confirm Password:</label>
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="inputfield"
                    />
                    <div
                      className="password-icon"
                      onClick={handleTogglePasswordVisibility}
                    >
                      {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                    </div>
                  </div>
                </div>
                <p className="error-warning">{passwordError}</p>
 
                <ReCAPTCHA
                  sitekey="6Lc0Gh0qAAAAAAOU_Dzc-5k4ZKnJGUs1Bl-FFp7A"
                  onChange={(value) => setCaptchaValue(value)}
                  className="mt-4"
                />
                <div className="terms mt-4">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    required
                  />
                  <label
                    htmlFor="terms"
                    style={{ fontSize: "12px", marginLeft: "8 px" }}
                  >
                    I agree to the{" "}
                    <a
                      href="/terms"
                      target="_blank"
                      className="text-decoration-none"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
                 {/* Display success message */}
                 {message && <p style={{ color: 'green' }}>{message}</p>}
 
{/* Display error message */}
{error && <p style={{ color: 'red' }}>{error}</p>}
 
                <button
                  type="submit"
                  // disabled={!isFormValid()}
                  className="submit mt-3"
                  // onClick={() => {navig('/Register1')
                  // }}//Changed For FormSubmission
 
                >
                       
                  Register
                </button>
                <label
                  htmlFor="terms"
                  style={{ fontSize: "12px", marginTop: "10px" }}
                >
                  Already have an account{" "}
                  <a
                    href="/"
                    target="_blank"
                    className="logintxt text-decoration-none"
                  >
                    LOGIN
                  </a>
                </label>
              </form>
            )}
          </div>
        </div>
        <div className="imgpage">
        <div className="imgpage-fixed">
        <img src={logo} className="imgpage-img" />
          <span className="imgpage-text">
            Effortlessly turn your scrap into cash—book a dealer, get accurate
            weights, and enjoy secure payments. Simplify recycling with just a
            few taps!
          </span>
        </div>
        </div>
      </div>
    </div>
  );
};
 
export default Register;