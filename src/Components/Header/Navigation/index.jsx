import React from "react";
import { Button } from "@mui/material";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";

import "./style.scss";
function Navigation(props) {
  return (
    <>
      <nav>
        <div className="container">
          <div className="row">
            <div className="col-sm-3 navPart1">
              <Button className="allCategoriTab align-items-center">
                <span className="icon1">
                  <IoIosMenu />
                </span>
                <span className="text">ALL CATEGORIES</span>
                <span className="icon2">
                  <FaAngleDown />
                </span>
              </Button>
            </div>
            <div className="col-sm-9 navPart2"></div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
