import { GrView, GrUpdate } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";

const DisplayUser = (props) => {
  const { listUsers } = props;

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
                    <button
                      onClick={() => props.handleUpdateUser(user)}
                      className="btn btn-outline-warning btn-sm mx-3"
                    >
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
