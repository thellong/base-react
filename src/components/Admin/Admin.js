import Sidebar from "./Sidebar";

const Admin = () => {
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <Sidebar />
      </div>
      <div className="admin-content"></div>
    </div>
  );
};

export default Admin;
