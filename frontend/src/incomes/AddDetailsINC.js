import React, { useState } from "react";
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import{faDeleteLeft, faEdit} from "@fortawesome/free-solid-svg-icons"
import { del_INC, edit_INC } from "../redux/Action/INCOMEaction";
import { useDispatch } from "react-redux";
import { Button, Form, Modal } from "react-bootstrap";
import Dateformat from "../components/Date";
const AddDetailsINC = ({ el }) => {
  const dispatch=useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState(el.title);
  const [description, setDescription] = useState(el.description);
  const [amount, setAmount] = useState(el.amount);

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(edit_INC(el._id, { title,description ,amount }), handleClose());  
  };
  return (
    <>
      <tr className="align-middle text-dark">
        <th className="p-6" scope="row">
   
        </th>

         <td className="p-6">{el.title}</td>
        <td className="p-6">{el.description}</td>
        <td className="p-6">{el.amount}</td>
        <td className="p-6">{Dateformat(el.createdAt)}</td> 

        <td className="p-6">
        <Button variant="secondary" className="badge bg-success-light " onClick={() => dispatch(del_INC(el._id))}> <FontAwesomeIcon icon={faDeleteLeft}> </FontAwesomeIcon></Button>
          <Button onClick={handleShow}
            variant="secondary"
            className="badge bg-success-light " >
           <FontAwesomeIcon icon={faEdit}> </FontAwesomeIcon>
          </Button>
          <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  

                  <Form.Group className="mb-3">
                    <Form.Label>title : </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Title"
                  
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>description : </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>amount</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Amount"
                      onChange={(e) => setAmount(e.target.value)}
                      value={amount}
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="warning" onClick={handleEdit}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          
        </td>
      </tr>
    </>
  );
};

export default AddDetailsINC;