import ModalAddUser from "./ModalAddUser";
import "./style/ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import { useState } from "react";
import DisplayUser from "./DisplayUser";

const ManageUser = (props) => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);

  return (
    <div className="manage-user-container">
      <div className="title">Manage Users</div>
      <div className="users-content">
        <div className="btn-add-new">
          <button onClick={() => setShowModalCreateUser(true)}>
            <FcPlus />
            Add new user
          </button>
        </div>
      </div>
      <div className="users-display">
        <DisplayUser />
      </div>
      <ModalAddUser
        show={showModalCreateUser}
        setShow={setShowModalCreateUser}
      />
    </div>
  );
};

export default ManageUser;
