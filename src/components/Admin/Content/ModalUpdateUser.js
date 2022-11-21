import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import { toast } from "react-toastify";
import _ from "lodash";

const ModalUpdateUser = (props) => {
  // State of the props received from the parent component.
  const { show, setShow, listUsers, setListUsers, dataUpdate } = props;

  // States of this component.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const [avatar, setAvatar] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      setEmail(dataUpdate.email);
      setPassword(dataUpdate.password);
      setUsername(dataUpdate.username);
      setRole(dataUpdate.role);
      setAvatar("");
      setPreviewImage("");
    }
  }, [dataUpdate]);

  const handleClose = () => {
    setShow(false);
    setEmail("");
    setPassword("");
    setUsername("");
    setRole("");
    setAvatar("");
    setPreviewImage("");
  };

  const handleFileUpload = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
      setAvatar(event.target.files[0]);
    } else {
      setPreviewImage("");
    }
  };

  const handleSubmit = () => {
    let data = {
      id: Math.floor(Math.random() * 100 + 1),
      email: email,
      username: username,
      password: password,
      role: role,
    };

    setListUsers([data, ...listUsers]);
    toast.success("Add user successfully");
    handleClose();
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        backdrop="static"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                disabled
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">ROLE </label>
              <select
                className="form-select"
                value={role}
                onChange={(event) => {
                  setRole(event.target.value);
                }}
              >
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
            <div className="col-md-12">
              <label className="form-label label-upload" htmlFor="label-upload">
                <FcPlus />
                Avatar
              </label>
              <input
                className="form-control"
                type="file"
                hidden
                id="label-upload"
                onChange={(event) => {
                  handleFileUpload(event);
                }}
              />
            </div>

            <div className="col-md-12 img-preview">
              {previewImage ? (
                <img src={previewImage} alt="previewImage" />
              ) : (
                <span>Preview image</span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmit()}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpdateUser;
