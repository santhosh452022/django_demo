import React, { useState, useRef } from "react";
import { FiUploadCloud } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Headerdealer from "../component/Headerdealer";
import Bottomdealer from "../component/Bottomdealer";
 
const Dealerdetails = () => {
  const navigate = useNavigate();
 
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    mailId: "",
    dateOfBirth: new Date(),
    aadharNumber: "",
    panCardNumber: "",
    licenseNumber: "",
    vehicleNumber: "",
    address: "",
    city: "",
    state: "",
    postcode: "",
    nationality: "",
    bankAccountNumber: "",
    ifscCode: "",
    bankAccountName: "",
  });
 
  const [errors, setErrors] = useState({});
  const [fileNames, setFileNames] = useState({
    aadhar: "",
    panCard: "",
    license: "",
    vehicle: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select Vehicle Type");
  const [options] = useState(["2 wheeler", "3 wheeler", "4 wheeler"]);
  const fileInputRefs = {
    aadhar: useRef(null),
    panCard: useRef(null),
    license: useRef(null),
    vehicle: useRef(null),
  };

    const [message, setMessage] = useState('');
  const [error, setError] = useState('');

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
 
    let errorMessage = "";
 
    if (name === "phoneNumber") {
      if (!/^\d+$/.test(value) || value.length <= 9) {
        errorMessage = "Only integer values allowed and must be more than 9 digits";
      }
    } else if (name === "aadharNumber") {
      if (!/^\d{12}$/.test(value)) {
        errorMessage = "Only 12 digits allowed and must be an integer";
      }
    }
 
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };
 
  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      dateOfBirth: date,
    }));
 
    setErrors((prevErrors) => ({
      ...prevErrors,
      dateOfBirth: "",
    }));
  };
 
  // const handleFileChange = (fileType) => (e) => {
  //   const file = e.target.files[0];
  //   setFileNames((prevFileNames) => ({
  //     ...prevFileNames,
  //     [fileType]: file ? file.name : "",
  //   }));
  // };


  // Changed handleFileChange

const handleFileChange = (fileType) => (e) => {
  const file = e.target.files[0];
  setFileNames((prevFileNames) => ({
    ...prevFileNames,
    [fileType]: file ? file : null, 
  }));
};
 
  const handleIconClick = (fileType) => {
    fileInputRefs[fileType].current.click();
  };
 
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setErrors((prevErrors) => ({
      ...prevErrors,
      vehicleType: "",
    }));
  };
 
  const validateForm = () => {
    const newErrors = {};
 
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number is required";
    if (!/^\d+$/.test(formData.phoneNumber) || formData.phoneNumber.length <= 9) {
      newErrors.phoneNumber = "Only integer values allowed and must be more than 9 digits";
    }
    if (!formData.mailId) newErrors.mailId = "Mail ID is required";
    if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of Birth is required";
    if (!formData.aadharNumber) newErrors.aadharNumber = "Aadhar Number is required";
    if (!formData.panCardNumber) newErrors.panCardNumber = "PAN Card Number is required";
    if (!formData.licenseNumber) newErrors.licenseNumber = "License Number is required";
    if (!formData.vehicleNumber) newErrors.vehicleNumber = "Vehicle Number is required";
    if (selectedOption === "Select Vehicle Type") newErrors.vehicleType = "Vehicle Type must be selected";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.postcode) newErrors.postcode = "Post / Zip code is required";
    if (!formData.nationality) newErrors.nationality = "Nationality is required";
    if (!formData.bankAccountNumber) newErrors.bankAccountNumber = "Bank Account Number is required";
    if (!formData.ifscCode) newErrors.ifscCode = "IFSC Code is required";
    if (!formData.bankAccountName) newErrors.bankAccountName = "Bank Account Name is required";
 
    return newErrors;
  };
 
  const handleSubmit = async () => {
    const newErrors = validateForm();
 


      const uploadFile = new FormData();
  // Append text data
  for (const [key, value] of Object.entries(formData)) {
    uploadFile.append(key, value);
  }
  // Append file data
  for (const [key, file] of Object.entries(fileNames)) {
    if (file) {
      uploadFile.append(key, file);
    }
  }
  // Append the selected option
  uploadFile.append("vehicleType", selectedOption);
  try {
    const response = await fetch('http://localhost:8000/dealer_details/', {
      method: 'POST',
      body: uploadFile,
      headers: {
        'X-CSRFToken': getCookie('csrftoken'),
      },
    });
    if (response.ok) {
      const data = await response.json();
      setMessage(data.message); 
    } else {
      const data = await response.json();
      setError(data.error); 
    }
  } catch (error) {
    console.error('Error:', error);
  }
    if (Object.keys(newErrors).length === 0) {
      // Form is valid, proceed with navigation
      navigate("/Applicationstatus");
    } else {
      setErrors(newErrors);
    }
  };
 
  return (
    <>
      <div
        className="container-fluid phonemail-gap"
        style={{ width: "100%" }}
      >
        <div className="agentdetails" id="agentdetails">
          <h2 className="text-center" style={{ fontWeight: "700" }}>
            DEALER DETAILS
          </h2>
          <span style={{ fontWeight: "600", marginTop: "20px" }}>
            ENTER THE FOLLOWING DETAILS TO CREATE AN DEALER ACCOUNT
          </span>
 
          <div>
            <label className="HeadText">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className={`inputfield ${errors.name ? "error" : ""}`}
            />
            <p className="error-warning">{errors.name}</p>
          </div>
 
          <label className="HeadText">Date of Birth:</label>
          <div className="datepicker-container">
            <DatePicker
              selected={formData.dateOfBirth}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              className={`form__input ${errors.dateOfBirth ? "error" : ""}`}
              placeholderText="dd/mm/yyyy"
            />
            <FaCalendarAlt className="calendar_icon" />
          </div>
          <p className="error-warning">{errors.dateOfBirth}</p>
 
          <div className="phonemail">
            <div className="col-6 col-lg-6 col-sm-12 phonemail-gap">
              <label className="HeadText">Phone Number:</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                className={`inputfield ${errors.phoneNumber ? "error" : ""}`}
              />
              <p className="error-warning">{errors.phoneNumber}</p>
            </div>
            <div className="col-6 col-lg-6 col-sm-12">
              <label className="HeadText">Mail ID:</label>
              <input
                type="text"
                name="mailId"
                value={formData.mailId}
                onChange={handleInputChange}
                required
                className={`inputfield ${errors.mailId ? "error" : ""}`}
              />
              <p className="error-warning">{errors.mailId}</p>
            </div>
          </div>
 
          <div className="phonemail">
            <div className="col-6 col-lg-6 col-sm-12 phonemail-gap">
              <label className="HeadText">Aadhar Number:</label>
              <input
                type="text"
                name="aadharNumber"
                value={formData.aadharNumber}
                onChange={handleInputChange}
                placeholder="0000-0000-0000"
                required
                className={`inputfield ps-2 ${errors.aadharNumber ? "error" : ""}`}
              />
              <p className="error-warning">{errors.aadharNumber}</p>

              <label className="HeadText">Aadhar Image:</label>
              <div className="uploaddiv">
                <input
                  type="file"
                  ref={fileInputRefs.aadhar}
                  style={{ display: "none" }}
                  onChange={handleFileChange("aadhar")}
                />
                <div
                  onClick={() => handleIconClick("aadhar")}
                  style={{
                    cursor: "pointer",
                    fontSize: "24px",
                    flexDirection: "column",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FiUploadCloud className="uploadicon" />
      
                </div>
              </div>
              <p style={{fontSize:"14px",marginTop:"10px"}}>Selected file: {fileNames.aadhar ? fileNames.aadhar.name : "No file selected"}</p>
            </div>
 
            <div className="col-6 col-lg-6 col-sm-12 phonemail-gap">
              <label className="HeadText">PAN Card Number:</label>
              <input
                type="text"
                name="panCardNumber"
                value={formData.panCardNumber}
                onChange={handleInputChange}
                placeholder="PAN Card Number"
                required
                className={`inputfield ps-2 ${errors.panCardNumber ? "error" : ""}`}
              />
              <p className="error-warning">{errors.panCardNumber}</p>

                <label className="HeadText">PAN Card Image:</label>
              <div className="uploaddiv">
                <input
                  type="file"
                  ref={fileInputRefs.panCard}
                  style={{ display: "none" }}
                  onChange={handleFileChange("panCard")}
                />
                <div
                  onClick={() => handleIconClick("panCard")}
                  style={{
                    cursor: "pointer",
                    fontSize: "24px",
                    flexDirection: "column",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FiUploadCloud className="uploadicon" />

                </div>
              </div>
              <p style={{fontSize:"14px",marginTop:"10px"}}>Selected file: {fileNames.panCard ? fileNames.panCard.name : "No file selected"}</p>

            </div>
          </div>
 
          <div className="phonemail">
            <div className="col-6 col-lg-6 col-sm-12 phonemail-gap">
              <label className="HeadText">Driving License Number:</label>
              <input
                type="text"
                name="licenseNumber"
                value={formData.licenseNumber}
                onChange={handleInputChange}
                placeholder="Driving License Number"
                required
                className={`inputfield ps-2 ${errors.licenseNumber ? "error" : ""}`}
              />
              <p className="error-warning">{errors.licenseNumber}</p>
              <label className="HeadText">License Image:</label>
              <div className="uploaddiv">
                <input
                  type="file"
                  ref={fileInputRefs.license}
                  style={{ display: "none" }}
                  onChange={handleFileChange("license")}
                />
                <div
                  onClick={() => handleIconClick("license")}
                  style={{
                    cursor: "pointer",
                    fontSize: "24px",
                    flexDirection: "column",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FiUploadCloud className="uploadicon" />
                </div>
              </div>
              <p style={{fontSize:"14px",marginTop:"10px"}}>Selected file: {fileNames.license ? fileNames.license.name : "No file selected"}</p>
            </div>
 
            <div className="col-6 col-lg-6 col-sm-12 phonemail-gap">
              <label className="HeadText">Vehicle Number:</label>
              <input
                type="text"
                name="vehicleNumber"
                value={formData.vehicleNumber}
                onChange={handleInputChange}
                placeholder="Vehicle Number"
                required
                className={`inputfield ps-2 ${errors.vehicleNumber ? "error" : ""}`}
              />
              <p className="error-warning">{errors.vehicleNumber}</p>
              <label className="HeadText">RC Book Image:</label>
              <div className="uploaddiv">
                <input
                  type="file"
                  ref={fileInputRefs.vehicle}
                  style={{ display: "none" }}
                  onChange={handleFileChange("vehicle")}
                />
                <div
                  onClick={() => handleIconClick("vehicle")}
                  style={{
                    cursor: "pointer",
                    fontSize: "24px",
                    flexDirection: "column",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FiUploadCloud className="uploadicon" />
                </div>
              </div>
              <p style={{fontSize:"14px",marginTop:"10px"}}>Selected file: {fileNames.vehicle ? fileNames.vehicle.name : "No file selected"}</p>

            </div>
         
          </div>
          <label className="HeadText">Vehicle Type:</label>
          <div className="custom-dropdown">
            <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
              {selectedOption}
              {isOpen ? (
                <FaChevronUp className="dropdown-arrow" />
              ) : (
                <FaChevronDown className="dropdown-arrow" />
              )}
            </div>
            {isOpen && (
              <div className="dropdown-options">
                {options.map((option, index) => (
                  <div
                    key={index}
                    className="dropdown-option"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
                <p className="error-warning">{errors.vehicleType}</p>
          </div>
 
          <div>
            <label className="HeadText">Bank Account Number:</label>
            <input
              type="text"
              name="bankAccountNumber"
              value={formData.bankAccountNumber}
              onChange={handleInputChange}
              required
              className={`inputfield ${errors.bankAccountNumber ? "error" : ""}`}
            />
            <p className="error-warning">{errors.bankAccountNumber}</p>
          </div>
 
          <div>
            <label className="HeadText">IFSC Code:</label>
            <input
              type="text"
              name="ifscCode"
              value={formData.ifscCode}
              onChange={handleInputChange}
              required
              className={`inputfield ${errors.ifscCode ? "error" : ""}`}
            />
            <p className="error-warning">{errors.ifscCode}</p>
          </div>
 
          <div>
            <label className="HeadText">User Name ( As on Bank Passbook):</label>
            <input
              type="text"
              name="bankAccountName"
              value={formData.bankAccountName}
              onChange={handleInputChange}
              required
              className={`inputfield ${errors.bankAccountName ? "error" : ""}`}
            />
            <p className="error-warning">{errors.bankAccountName}</p>
          </div>
 
          <div>
            <label className="HeadText">Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              className={`inputfield ${errors.address ? "error" : ""}`}
            />
            <p className="error-warning">{errors.address}</p>
          </div>
 
          <div className="phonemail">
          <div className="col-6 col-lg-6 col-sm-12 phonemail-gap">
            <label className="HeadText">City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
              className={`inputfield ${errors.city ? "error" : ""}`}
            />
            <p className="error-warning">{errors.city}</p>
          </div>
 
          <div className="col-6 col-lg-6 col-sm-12 phonemail-gap">
            <label className="HeadText">State:</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              required
              className={`inputfield ${errors.state ? "error" : ""}`}
            />
            <p className="error-warning">{errors.state}</p>
          </div>
          </div>
 
          <div className="phonemail">
          <div className="col-6 col-lg-6 col-sm-12 phonemail-gap">
            <label className="HeadText">Post /  PinCode:</label>
            <input
              type="text"
              name="postcode"
              value={formData.postcode}
              onChange={handleInputChange}
              required
              className={`inputfield ${errors.postcode ? "error" : ""}`}
            />
            <p className="error-warning">{errors.postcode}</p>
          </div>
 
          <div className="col-6 col-lg-6 col-sm-12 phonemail-gap">
            <label className="HeadText">Nationality:</label>
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleInputChange}
              required
              className={`inputfield ${errors.nationality ? "error" : ""}`}
            />
                              {/* Display success message */}
                  {message && <p style={{ color: 'green' }}>{message}</p>}

                  {/* Display error message */}
                  {error && <p style={{ color: 'red' }}>{error}</p>}
            <p className="error-warning">{errors.nationality}</p>
          </div>
          </div>
            <div onClick={handleSubmit} className="submit-button">
              Submit
            </div>
 
        </div>
        <Bottomdealer />
      </div>
    </>
  );
};
 

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

export default Dealerdetails;
 