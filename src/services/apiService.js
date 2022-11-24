import axios from "../../src/utils/axiosCustomize";
/**
 * Simplize data progress within client side.
 */
const addNewUser = (email, password, username, role, avatar) => {
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("avatar", avatar);

  return axios.post("api/add-user", data);
};

const getAllUsers = () => {
  return axios.get("api/get-all-users");
};

export { addNewUser, getAllUsers };
