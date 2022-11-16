import ModalAddUser from "./ModalAddUser";
import "./style/ManageUser.scss";

const ManageUser = (props) => {
  return (
    <div className="manage-user-container">
      <div className="title"></div>
      <div className="users-content"></div>
      <div className="users-display"></div>
      <ModalAddUser />
    </div>
  );
};

export default ManageUser;
