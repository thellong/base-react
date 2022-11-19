import { useEffect } from "react";
import { useState } from "react";
import { getAllUsers } from "../../../services/apiService";
import { GrView, GrUpdate } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";

const DisplayUser = (props) => {
  const [listUsers, setListUsers] = useState([
    {
      id: 1,
      email: "longtalongnhong@gmail.com",
      username: "longtalongnhong",
      role: "admin",
    },
    {
      id: 2,
      email: "linhtalinhtinh@gmail.com",
      username: "linhtalinhtinh",
      role: "admin",
    },
    {
      id: 3,
      email: "loangtaloangngoang@gmail.com",
      username: "loangtaloangngoang",
      role: "admin",
    },
    {
      id: 4,
      email: "hohahihe@gmail.com",
      username: "hohahihe",
      role: "admin",
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
    let res = await getAllUsers();
    /**
     * If data exists => update
     * setListUsers(res)
     */
  };
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>No</th>
            <th>Email</th>
            <th>Username</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listUsers && listUsers.length > 0 ? (
            listUsers.map((user) => {
              return (
                <tr key={`user-${user.id}`}>
                  <th>{user.id}</th>
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                  <td>{user.role}</td>
                  <td>
                    <button className="btn btn-outline-secondary btn-sm">
                      <GrView />
                    </button>
                    <button className="btn btn-outline-warning btn-sm mx-3">
                      <GrUpdate />
                    </button>
                    <button className="btn btn-outline-danger btn-sm">
                      <TiDeleteOutline />
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={4}>Data not found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default DisplayUser;
