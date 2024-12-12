import React from "react";
import { Button } from "@mui/material";
import './style.scss'
import { FaAngleDown } from "react-icons/fa6";

function CountryDropdown(props) {
  return (
    <div>
      <Button className="countryDrop">
        <div className="info d-flex flex-column">
          <span className="lable">Your location</span>
          <span className="name">India</span>
        </div>
        <span className="ml-auto"><FaAngleDown/></span>
      </Button>
    </div>
  );
}

export default CountryDropdown;
