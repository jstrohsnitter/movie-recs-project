import React, { useState } from "react";
import "./NavBar.css";

const navBarOptions = [
  { page: 'Home', content: 'Home' },
  { page: 'Watchlist', content: 'Watchlist' },
];

const NavBar = ({ handleNavBar }) => { // Accept handleNavBar as a prop
  const [chosenPage, setChosenPage] = useState('Home');

  const handleChoice = (event) => {
    const page = event.target.value;
    setChosenPage(page);
    handleNavBar(page); // Call the handleNavBar function to update the state in App component
  };

  return (
    <nav>
      <ul id="navbar">
        {navBarOptions.map((navBarOption, index) => (
          <button key={index} onClick={handleChoice} value={navBarOption.page}>
            {navBarOption.content}
          </button>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
