import ModalAddUser from "./ModalAddUser";
import "./style/ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import { useState } from "react";
import { useEffect } from "react";
import DisplayUser from "./DisplayUser";
import { getAllUsers } from "../../../services/apiService";

const ManageUser = (props) => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [listUsers, setListUsers] = useState([
    {
      id: 43,
      email: "admin@gmail.com",
      username: "admin",
      role: "USER",
    },
    {
      id: 1,
      email: "longtalongnhong@gmail.com",
      username: "longtalongnhong",
      role: "USER",
    },
    {
      id: 2,
      email: "linhtalinhtinh@gmail.com",
      username: "linhtalinhtinh",
      role: "USER",
    },
    {
      id: 3,
      email: "loangtaloangngoang@gmail.com",
      username: "loangtaloangngoang",
      role: "USER",
    },
    {
      id: 4,
      email: "hohahihe@gmail.com",
      username: "hohahihe",
      role: "USER",
    },
    {
      id: 5,
      email: "dsfa@gmail.com",
      username: "dsfa",
      role: "USER",
    },
  ]);

  /* Will be called after the render() to be called.
        Give it a empty array as the second param
        (this function will be called one) ~ componentDidMount().
  */
  /**
   * Shouldn't use asyncronous in useEffect().
   */
  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    // let res = await getAllUsers();
    /**
     * If data exists => update
     * setListUsers(res)
     */
  };

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
        <DisplayUser listUsers={listUsers} />
      </div>
      <ModalAddUser
        show={showModalCreateUser}
        setShow={setShowModalCreateUser}
        listUsers={listUsers}
        setListUsers={setListUsers}
        fetchAllUsers={fetchAllUsers}
      />
    </div>
  );
};

export default ManageUser;
