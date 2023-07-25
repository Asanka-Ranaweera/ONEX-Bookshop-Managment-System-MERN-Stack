// import logo from "../assets/logo2.png"

import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import logo from "../../assets/logo.png";
import axios from "axios";
import "jspdf-autotable";

function SideBar() {
  const [ShowReport, setShowReport] = useState(true);

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/order")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => alert(err));

    axios
      .get("http://localhost:8080/api/deliveries")
      .then((res) => {
        setData2(res.data);
      })
      .catch((err) => alert(err));
  }, []);

  const genaratePDF = () => {
    const name = "customer";
    const pdf_title = "Customers Report";
    const pdf_address = "info@ONEXbookshop.com";
    const pdf_phone = "+94 11 234 5678";
    const pdf_email = "Address: No 221/B, Peradeniya Road, Kandy";

    const doc = new jsPDF("landscape", "px", "a4", false);
    const today = new Date();
    const date = `${today.getFullYear()}-${
      today.getMonth() + 1
    }-${today.getDate()}`;

    const title = `${pdf_title}`;
    doc.setFont("helvetica");
    doc.setTextColor("#000000");

    // Add title and date
    doc.setFontSize(24);
    doc.text(title, 20, 30);
    doc.setFontSize(12);
    doc.setTextColor("#999999");
    doc.text(`Generated on ${date}`, 20, 40);
    doc.addImage(logo, "JPG", 20, 60, 70, 40);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.setTextColor("#000000");
    doc.text("ONEX BookShop", 100, 70);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor("#999999");
    doc.text(`Tel: ${pdf_phone}}`, 100, 80);
    doc.text(`Email: ${pdf_email}`, 100, 90);
    doc.text(`Address: ${pdf_address}`, 100, 100);
    doc.line(20, 110, 600, 110);

    // Add table with data
    doc.setTextColor("#999999");
    doc.setFontSize(12);
    doc.setTextColor("#000000");

    doc.autoTable({
      startY: 130,
      head: [
        [
          "Date of Registration",
          "Name",
          "Email",
          "Address",
          "Contact",
          "Gender",
        ],
      ],
      body: data.map((request) => [
        request.createdAt
          .toLocaleString("en-US", { timeZone: "Asia/Colombo" })
          .substring(0, 10),
        request.name,
        request.email,
        request.address,
        request.phone,
        request.gender,
      ]),
      theme: "grid",
    });

    doc.save(`${name}.pdf`);
  };

  const genaratePDF2 = () => {
    const name = "customer";
    const pdf_title = "Customers Report";
    const pdf_address = "info@ONEXbookshop.com";
    const pdf_phone = "+94 11 234 5678";
    const pdf_email = "Address: No 221/B, Peradeniya Road, Kandy";

    const doc = new jsPDF("landscape", "px", "a4", false);
    const today = new Date();
    const date = `${today.getFullYear()}-${
      today.getMonth() + 1
    }-${today.getDate()}`;

    const title = `${pdf_title}`;
    doc.setFont("helvetica");
    doc.setTextColor("#000000");

    // Add title and date
    doc.setFontSize(24);
    doc.text(title, 20, 30);
    doc.setFontSize(12);
    doc.setTextColor("#999999");
    doc.text(`Generated on ${date}`, 20, 40);
    doc.addImage(logo, "JPG", 20, 60, 70, 40);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.setTextColor("#000000");
    doc.text("ONEX BookShop", 100, 70);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor("#999999");
    doc.text(`Tel: ${pdf_phone}}`, 100, 80);
    doc.text(`Email: ${pdf_email}`, 100, 90);
    doc.text(`Address: ${pdf_address}`, 100, 100);
    doc.line(20, 110, 600, 110);

    // Add table with data
    doc.setTextColor("#999999");
    doc.setFontSize(12);
    doc.setTextColor("#000000");

    doc.autoTable({
      startY: 130,
      head: [
        [
          "Date of Registration",
          "Name",
          "Email",
          "Address",
          "Contact",
          "Gender",
        ],
      ],
      body: data.map((request) => [
        request.createdAt
          .toLocaleString("en-US", { timeZone: "Asia/Colombo" })
          .substring(0, 10),
        request.name,
        request.email,
        request.address,
        request.phone,
        request.gender,
      ]),
      theme: "grid",
    });

    doc.save(`${name}.pdf`);
  };

  return (
    <div className=" bg-[#001233] h-[100vh] flex-[15%] sticky top-0">
      <div className="mt-4">
        <img
          src={logo}
          alt="logo"
          className=" w- h-[100px] mx-auto object-contain"
        ></img>
        <h3 className=" text-[#2E4960] font-bold text-l text-center w-[150px] leading-5 my-2 tracking-wide mx-auto"></h3>
      </div>

      <div className="my-6 ">
        <NavLink
          to="/"
          activeClassName="active"
          className="link bg-[#2E4960] flex justify-start pl-6 font-semibold text-white text-[19px] h-[50px] block text-center mb-7 mx-auto  items-center"
        >
          Profile
        </NavLink>

        <NavLink
          to="/orders"
          activeClassName="active"
          className="link bg-[#2E4960] flex justify-start pl-6 font-semibold text-white text-[19px] h-[50px] block text-center mb-7 mx-auto  items-center"
        >
          Orders
        </NavLink>

        <NavLink
          to="/deliveries"
          activeClassName="active"
          className="link bg-[#2E4960] flex justify-start pl-6 font-semibold text-white text-[19px] h-[50px] block text-center mb-7 mx-auto  items-center"
        >
          Deliveries
        </NavLink>

        <NavLink
          to="/soreport"
          activeClassName="active"
          className="link bg-[#2E4960] flex justify-start pl-6 font-semibold text-white text-[19px] h-[50px] block text-center mb-7 mx-auto  items-center"
        >
          Reports
        </NavLink>

        {/* <NavLink
  to="/"
  activeClassName="active"
  className="link bg-[#2E4960] flex justify-start pl-6 font-semibold text-white text-[19px] h-[50px] block text-center mb-7 mx-auto  items-center"
>
    
    My Activities 
</NavLink> */}

        {/* <NavLink
  to="/quotation"
  activeClassName="active"
  className="link bg-[#2E4960] flex justify-start pl-6 font-semibold text-white text-[19px] h-[50px] block text-center mb-7 mx-auto  items-center"
>
    
    Quotation
</NavLink> */}
      </div>
{/* 
      {ShowReport && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-lg font-bold mb-4 ">
              Edit Order
            </h2>
            


       

<div className="flex">
                <button className="" onClick={() => setShowReport(false)}>
                  Close
                </button>
             
</div>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default SideBar;
