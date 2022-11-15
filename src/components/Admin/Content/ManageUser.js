import ModalAddUser from "./ModalAddUser";

const ManageUser = (props) => {
  return (
    <div className="manage-user-container">
      <div className="title"></div>
      <div className="users-content">
        <ModalAddUser />
      </div>
      <div className="users-display"></div>
    </div>
  );
};

export default ManageUser;
