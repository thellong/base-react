import Sidebar from "./Sidebar";
import { FaBars } from "react-icons/fa";
import "./Admin.scss";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin = () => {
  const [isCollapsed, setCollapse] = useState(false);
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <Sidebar collapsed={isCollapsed} />
      </div>
      <div className="admin-content">
        <div className="admin-header">
          <FaBars onClick={() => setCollapse(!isCollapsed)} />
        </div>
        <div className="admin-body">
          <Outlet />
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </div>
  );
};

export default Admin;
