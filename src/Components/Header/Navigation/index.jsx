import React, { useState,useEffect } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./style.scss";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
function Navigation(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const CustomMenu = styled(Menu)(({ theme }) => ({
    "& .MuiPaper-root": {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
      borderRadius: "12px",
    },
  }));
  
  const CustomMenuItem = styled(MenuItem)({
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "#f0f0f0",
    },
  });

   // Mở menu khi hover vào nút
   const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Đóng menu khi rời chuột khỏi menu hoặc nút
  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const handleMouseLeaveMenu = () => {
    setAnchorEl(null);
  };
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
                  <Link to="/">
                    Home <MdKeyboardArrowDown className="ml-1" />
                  </Link>
                </li>
                <li className="list-inline-item"  onMouseLeave={handleMouseLeave}>
                    <Button
                      component={Link}
                      to="/test"
                      className="btn btn-link"
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      onMouseEnter={handleMouseEnter} // Mở menu khi hover
                    >
                      MEN
                    <MdKeyboardArrowDown className="ml-1" />
                    </Button>{" "}
                    <CustomMenu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                        onMouseLeave: handleMouseLeaveMenu, // Đóng menu khi chuột rời khỏi vùng menu
                        onMouseEnter: () => setAnchorEl(anchorEl), // Giữ menu mở khi di chuyển chuột trong menu
                      }}
                      className="custom-menu"
                    >
                      <CustomMenuItem className="custom-menu-item" onClick={handleClose}>CLOTHING</CustomMenuItem>
                      <CustomMenuItem className="custom-menu-item" onClick={handleClose}>FOOTWEAR</CustomMenuItem>
                      <CustomMenuItem className="custom-menu-item" onClick={handleClose}>WATCHESA</CustomMenuItem>
                    </CustomMenu>
                </li>
               
                <li className="list-inline-item">
                  <Link to="/">WOMEN</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/"> BEAUTY</Link>
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
    </>
  );
}

export default Navigation;
