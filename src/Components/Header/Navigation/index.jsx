import React, { useState, useEffect } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

import "./style.scss";
import { Link } from "react-router-dom";
function Navigation(props) {
  const [openNav, setOpenNav] = useState(false);
  const [hoveredItem, setHoveredItem] = useState("");
  function handleClickOpenNav() {
    setOpenNav(!openNav);
  }

  return (
    <>
      <nav>
        <div className="container">
          <div className="row">
            <div className="col-sm-3 navPart1">
              <div className="categoriWrapper" onClick={handleClickOpenNav}>
                {openNav === false ? (
                  <Button className="allCategoriTab align-items-center">
                    <span className="icon1">
                      <IoIosMenu />
                    </span>
                    <span className="text">ALL CATEGORIES</span>
                    <span className="icon2">
                      <FaAngleDown />
                    </span>
                  </Button>
                ) : (
                  <Button className="allCategoriTab align-items-center">
                    <span className="icon1">
                      <IoIosMenu />
                    </span>
                    <span className="text">ALL CATEGORIES</span>
                    <span className="icon2">
                      <FaAngleUp />
                    </span>
                  </Button>
                )}
                <div className={`sidebarNav shadow ${openNav ? "open" : ""}`}>
                  <ul>
                    {[
                      "Men",
                      "Women",
                      "Kids",
                      "Beauty",
                      "Watches",
                      "Gift",
                      "Blog",
                      "Contact",
                    ].map((item, index) => (
                      <li
                        key={index}
                        onMouseEnter={() => setHoveredItem(item)}
                        onMouseLeave={() => setHoveredItem("")}
                      >
                        <Link to="/">
                          <Button
                            className={`${item}-item ${
                              hoveredItem === "Men" && item === "Men"
                                ? "open-men-sub-menu"
                                : ""
                            }`}
                          >
                            {item}
                            {
                              ["Men", "Kids", "Beauty"].includes(item)
                                ? <FaAngleRight />
                                : ""
                            }
                          </Button>
                        </Link>
                        {["Men", "Kids", "Beauty"].includes(item) && (
                          <ul
                            className={`${item}-sub-menu ${
                              hoveredItem === item ? "visible" : ""
                            }`}
                          >
                            <li>
                              <Link to="/">
                                <Button> 1</Button>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <Button> 2</Button>
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-9 navPart2 d-flex  ml-auto">
              <ul className="list list-inline">
                <li className="list-inline-item">
                  <Link to="/">
                    Home <MdKeyboardArrowDown className="ml-1" />
                  </Link>
                </li>

                <li className="list-inline-item">
                  <Link to="/">
                    MEN
                    <div className="submenu shadow">
                      {[
                        "clothing",
                        "footwear",
                        "watches",
                        "clothing",
                        "footwear",
                        "watches",
                      ].map((item, index) => (
                        <Link key={index} to="/">
                          <Button>{item}</Button>
                        </Link>
                      ))}
                    </div>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/">
                    WOMEN
                    <div className="submenu shadow">
                      {[
                        "clothing",
                        "footwear",
                        "watches",
                        "clothing",
                        "footwear",
                        "watches",
                      ].map((item, index) => (
                        <Link key={index} to="/">
                          <Button>{item}</Button>
                        </Link>
                      ))}
                    </div>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/">
                    {" "}
                    BEAUTY
                    <div className="submenu shadow">
                      {[
                        "clothing",
                        "footwear",
                        "watches",
                        "clothing",
                        "footwear",
                        "watches",
                      ].map((item, index) => (
                        <Link key={index} to="/">
                          <Button>{item}</Button>
                        </Link>
                      ))}
                    </div>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/">WATCHES</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/">KIDS</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/">GIFT</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/">BLOG</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/">CONTACT</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="line"></div>
    </>
  );
}

export default Navigation;
