import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { Button } from "@mui/material";
import "./style.scss";
function SearchBox(props) {
    return (
        <>
             <div className="headerSearch ml-3 mr-3">
                  <input type="text" placeholder="Search for products...." />
                  <Button className="btn-iosearch">
                    <IoIosSearch />
                  </Button>
                </div>
        </>
    );
}

export default SearchBox;