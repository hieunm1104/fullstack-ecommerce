import React from "react";
import { Button } from "@mui/material";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiHome } from "react-icons/ci";

import "./style.scss";
import { Link } from "react-router-dom";
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
            <div className="col-sm-9 navPart2 d-flex align-items-center ml-auto">
              <ul className="list list-inline">
                <li className="list-inline-item">
                  <Link to="/">Home <MdKeyboardArrowDown className="ml-1"/></Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/">Fashion <MdKeyboardArrowDown className="ml-1"/></Link>
                  
                </li>
                <li className="list-inline-item">
                  <Link to="/">Electronic</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/"> Bakery</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/">grocery</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/">Blog</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
