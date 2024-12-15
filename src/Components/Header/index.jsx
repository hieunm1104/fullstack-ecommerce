import React, { useContext } from "react";
import Logo from "../../assets/image/logo.png";
import "./style.scss";
import { Link } from "react-router-dom";
import CountryDropdown from "../CountryDropdown";
import { FiUser } from "react-icons/fi";
import { Button } from "@mui/material";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation";
import { MyContext } from "../../App";

function Header(props) {

  const context = useContext(MyContext);
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
                {
                  context.values.countryList.length !==0 && (
                    <CountryDropdown />
                  )
                }
                <SearchBox placeholder={"Search for products, brands and more"} />
                <div className="d-flex align-items-center part3 ml-auto">
                  <Button className="btn-user">
                    <FiUser />
                  </Button>
                  <div className="ml-auto cartTab d-flex align-items-center">
                    <span className="price">$3.29</span>
                    <div className="position-relative">
                      <Button className="btn-cart">
                        <IoBagOutline />
                      </Button>
                      <span className="count d-flex align-items-center justify-content-center">
                        1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Navigation />
      </div>
    </>
  );
}

export default Header;
