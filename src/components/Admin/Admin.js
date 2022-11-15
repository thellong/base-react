import Sidebar from "./Sidebar";
import { FaBars } from "react-icons/fa";
import "./Admin.scss";
import { useState } from "react";
import { Outlet } from "react-router-dom";

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
    </div>
  );
};

export default Admin;
