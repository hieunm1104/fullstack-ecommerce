import React, { useContext, useEffect, useState } from "react";
import { Button } from "@mui/material";
import "./style.scss";
import { FaAngleDown } from "react-icons/fa6";
import Dialog from "@mui/material/Dialog";
import SearchBox from "../Header/SearchBox";
import { IoMdClose } from "react-icons/io";
import { MyContext } from "../../App";

function CountryDropdown() {
  const [openModal, setOpenModal] = useState(false);
  const context = useContext(MyContext);
  const [selectedTab, setSelectedTab] = useState(null);

  const [fakeCountryList, setFakeCountryList] = useState([]);

  useEffect(() => {
    if (context?.values?.countryList) {
      setFakeCountryList(context.values.countryList);
    } else {
      console.error("countryList is not available in context");
    }
  }, [context.values.countryList]);

  const selectedCountry = (index) => {
    setSelectedTab(index);
    setOpenModal(false);
  };
  const filterCountry = (e) => {
    let value = e.target.value.toLowerCase();
    if (value.length > 0) {
      const listAfterFilter = context.values.countryList.filter((item) =>
        item.country.toLowerCase().includes(value)
      );
      setFakeCountryList(listAfterFilter);
    } else {
      setFakeCountryList(context.values.countryList);
    }
  };
  return (
    <div>
      <Button className="countryDrop" onClick={() => setOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="lable">Your location</span>
          <span className="name">
            {selectedTab !== null && fakeCountryList[selectedTab]
              ? fakeCountryList[selectedTab].country
              : "Select your location"}
          </span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>
      <Dialog open={openModal} className="locationModal">
        <h4>Choose your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area. </p>
        <Button className="closeBtn" onClick={() => setOpenModal(false)}>
          <IoMdClose />
        </Button>
        <div className="searchBoxDialog">
          <SearchBox
            placeholder={"Search your area..."}
            onChange={filterCountry}
          />
        </div>
        <div className="locationList">
          <ul>
            {fakeCountryList?.length !== 0 &&
              fakeCountryList?.map((item, index) => {
                return (
                  <li key={index}>
                    <Button
                      onClick={() => selectedCountry(index)}
                      className={`${selectedTab === index ? "active" : ""}`}
                    >
                      {item.country}
                    </Button>
                  </li>
                );
              })}
          </ul>
        </div>
      </Dialog>
    </div>
  );
}

export default CountryDropdown;
