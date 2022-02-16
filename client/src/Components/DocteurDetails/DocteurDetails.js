import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addRendezvous } from "../../JS/Actions/mesrendezvous";

import "./DocteurDetails.css";

const DocteurDetails = ({ docteur }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const patient = useSelector((state) => state.patientReducer.patient);

  const [newRendezvous, setNewRendezvous] = useState({
    patientId: "",
    docteurId: "",
    date: "",
    time: "",
    status: "En Attente",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNewRendezvous({
      ...newRendezvous,
      patientId: patient._id,
      docteurId: docteur._id,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="cardDetails">
      <div className="part">
        <h5>Dr. {docteur.fullName}</h5>
      </div>
      <div className="part">
        <h6>Spécialité : {docteur.speciality}</h6>
        <h6>Address : {docteur.address}</h6>
      </div>
      <div className="part">
        <h6>Email : {docteur.email}</h6>
        <h6>Phone : {docteur.phone}</h6>
      </div>

      <Button className="bbb" variant="warning" onClick={handleShow}>
        {" "}
        Fixer un Rendez-Vous
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter Un Rendez-vous</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="form">
            <input
              type="date"
              name="date"
              id="date"
              className="form-control"
              placeholder="date"
              onChange={handleChange}
            />
            <input
              type="time"
              name="time"
              id="time"
              className="form-control"
              placeholder="time"
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
              dispatch(addRendezvous(newRendezvous));
              handleClose();
            }}
          >
            Save Rendez-Vous
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DocteurDetails;
