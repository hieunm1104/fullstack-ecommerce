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
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [fakeCountryList, setFakeCountryList] = useState([]);
  const [searchValue, setSearchValue] = useState(""); // Lưu giá trị input tạm thời (trực tiếp)
  const [debouncedValue, setDebouncedValue] = useState(""); // Giá trị thực sau debounce

  // Load dữ liệu gốc vào fakeCountryList
  useEffect(() => {
    if (context?.values?.countryList) {
      setFakeCountryList(context.values.countryList);
    }
  }, [context.values.countryList]);

  // Reset dữ liệu khi mở modal
  useEffect(() => {
    if (openModal && context?.values?.countryList) {
      setFakeCountryList(context.values.countryList);
    }
  }, [openModal]);

  // Xử lý debounce cho searchValue
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(searchValue); // Cập nhật giá trị thực sau 1s
    }, 300);

    return () => {
      clearTimeout(handler); // Xóa timeout trước đó nếu người dùng tiếp tục nhập
    };
  }, [searchValue]);

  // Lọc danh sách dựa trên giá trị debounce
  useEffect(() => {
    if (debouncedValue.length > 0) {
      const listAfterFilter = context.values.countryList.filter((item) =>
        item.country.toLowerCase().includes(debouncedValue.toLowerCase())
      );
      setFakeCountryList(listAfterFilter);
    } else {
      setFakeCountryList(context.values.countryList);
    }
  }, [debouncedValue, context.values.countryList]);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country); // Lưu thông tin quốc gia đã chọn
    setOpenModal(false);         // Đóng modal
  };

  return (
    <div>
      <Button className="countryDrop" onClick={() => setOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="lable">Your location</span>
          <span className="name">
            {selectedCountry ? selectedCountry.country : "Select your location"}
          </span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>
      <Dialog open={openModal} className="locationModal">
        <h4>Choose your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area.</p>
        <Button className="closeBtn" onClick={() => setOpenModal(false)}>
          <IoMdClose />
        </Button>
        <div className="searchBoxDialog">
          <SearchBox
            placeholder={"Search your area..."}
            onChange={(e) => setSearchValue(e.target.value)} // Lưu giá trị tạm thời vào searchValue
          />
        </div>
        <div className="locationList">
          <ul>
            {fakeCountryList?.length !== 0 &&
              fakeCountryList?.map((item, index) => (
                <li key={index}>
                  <Button
                    onClick={() => handleCountrySelect(item)}
                    className={`${selectedCountry?.country === item.country ? "active" : ""}`}
                  >
                    {item.country}
                  </Button>
                </li>
              ))}
          </ul>
        </div>
      </Dialog>
    </div>
  );
}

export default CountryDropdown;
