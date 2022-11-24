import { Button, Modal } from "react-bootstrap";

const ModalDisplayUser = (props) => {
  const { show, setShow, userInfo } = props;

  const handleClose = () => {
    setShow(false);
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
                value={userInfo.email}
                disabled
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={userInfo.username}
                disabled
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">
                {userInfo.role === "ADMIN" ? "ADMIN" : "USER"}
              </label>
            </div>
            {/*
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
             */}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDisplayUser;
