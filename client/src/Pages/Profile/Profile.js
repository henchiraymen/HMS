import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteDocteur, editDocteur } from "../../JS/Actions/docteur";

import "./Profile.css";

const Profile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const docteurR = useSelector((state) => state.docteurReducer.docteur);

  const [newDocteur, setNewDocteur] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    speciality: "",
  });

  const [docteur, setDocteur] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    speciality: "",
  });

  useEffect(() => {
    setDocteur(docteurR);
  }, [docteurR]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNewDocteur({ ...docteur, [e.target.name]: e.target.value });
  };

  return (
    <div className="profile">
      <div className="profileCard">
        <div className="info">
          <h4>Name : {docteur.fullName}</h4>
          <h4> Spécialité : {docteur.speciality}</h4>
          <h4>Email : {docteur.email} </h4>
          <h4> Phone : {docteur.phone}</h4>
          <h4> Address : {docteur.address}</h4>
        </div>
        <div>
          <Button variant="warning" onClick={handleShow}>
            Edit Profile
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form className="form">
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  className="form-control"
                  placeholder="Full Name"
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="speciality"
                  id="speciality"
                  className="form-control"
                  placeholder="Speciality"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="form-control"
                  placeholder="Phone"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="form-control"
                  placeholder="Address"
                  onChange={handleChange}
                />
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  dispatch(editDocteur(docteur._id, newDocteur));
                  handleClose();
                }}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          <Button
            variant="danger"
            onClick={() => {
              dispatch(deleteDocteur(docteur._id));
            }}
          >
            Delete Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
