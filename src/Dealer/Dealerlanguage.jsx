import React, { useState } from 'react';
import Headerdealer from '../component/Headerdealer';
 
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f0f0', 
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  header: {
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  },
  dropdown: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    cursor: 'pointer',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  dropdownHover: {
    borderColor: '#007bff',
  },
  button: {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};
 
function Dealerlanguage() {
  const [language, setLanguage] = useState('en'); 
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
 
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };
 
  return (
    <>
    <Headerdealer/>
    <div style={styles.container}>
      <h1 style={styles.header}>Current Language: {language.toUpperCase()}</h1>
      <select
        style={{
          ...styles.dropdown,
          ...(isDropdownHovered ? styles.dropdownHover : {}),
        }}
        value={language}
        onChange={handleLanguageChange}
        onMouseEnter={() => setIsDropdownHovered(true)}
        onMouseLeave={() => setIsDropdownHovered(false)}
      >
        <option value="en">English</option>
        <option value="ta">Tamil</option>
        <option value="te">Telugu</option>
        <option value="hi">Hindi</option>
      </select>
    </div>
    </>
  );
}
 
export default Dealerlanguage;