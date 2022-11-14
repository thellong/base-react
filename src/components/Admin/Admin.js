import Sidebar from "./Sidebar";
import { FaBars } from "react-icons/fa";
import "./Admin.scss";
import { useState } from "react";

const Admin = () => {
  const [isCollapsed, setCollapse] = useState(false);
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <Sidebar collapsed={isCollapsed} />
      </div>
      <div className="admin-content">
        <FaBars onClick={() => setCollapse(!isCollapsed)} />
      </div>
    </div>
  );
};

export default Admin;
