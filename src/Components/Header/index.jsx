import React from "react";
import Logo from "../../assets/image/logo.png";
import "./style.scss";
import { Link } from "react-router-dom";
import CountryDropdown from "../CountryDropdown";
import { IoSearch } from "react-icons/io5";
import { Button } from "@mui/material";

function Header(props) {
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-blue">
          <div className="container">
            <div className="mb-0 mt-0 text-center">
              <p>
                {" "}
                Duo to the <b>COVID 19</b> epidemic, orders may be processed
                with a slight delay
              </p>
            </div>
          </div>
        </div>
        <div className="header">
          <div className="container">
            <div className="d-flex">
              <div className="logoWrapper col-sm-3 d-flex align-items-center col-sm-2">
                <Link to={"/"}>
                  {" "}
                  <img src={Logo} alt="" />{" "}
                </Link>
              </div>
              <div className="col-sm-10 d-flex align-items-center part2">
                <CountryDropdown />
                <div className="headerSearch ml-3 mr-3">
                  <input type="text" />
                  <Button>
                    <IoSearch />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
