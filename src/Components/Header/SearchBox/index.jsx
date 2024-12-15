import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { Button } from "@mui/material";
import "./style.scss";
function SearchBox({placeholder, onChange}) {
    return (
        <>
             <div className="headerSearch">
                  <input type="text" placeholder={placeholder} onChange={onChange}/>
                  <Button className="btn-iosearch">
                    <IoIosSearch />
                  </Button>
              </div>
        </>
    );
}

export default SearchBox;