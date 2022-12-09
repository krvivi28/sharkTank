import React from "react";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import "./pitchlist.css";
import Badge from "react-bootstrap/Badge";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
const Pitchlist = (props) => {
  const navigate=useNavigate();
  const [show3, setShow3] = useState(false);
  const [invdata, setInvdata] = useState({
    investor: "",
    ammount: "",
    equity: "",
    comment: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setInvdata({ ...invdata, [name]: value });
  };
  const handleSubmit = async (e) => {
    const { investor, ammount, equity, comment } = invdata;
    e.preventDefault();
    if (
      invdata.investor === "" ||
      invdata.comment === "" ||
      invdata.equity === "" ||
      invdata.ammount === ""
    ) {
      window.alert(
        "All input fields are required!! please fill valid details in all input fields"
      );
      return;
    }
    const res = await axios.post(`/pitch/${props.id}/makeoffer`, {
      investor,
      ammount,
      equity,
      comment,
    });
    if (res.status === 201) {
      // window.alert("success");
      setShow3(true);
      setInvdata({ investor: "", comment: "", ammount: "", equity: "" });
    } else {
      window.alert("server error");
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleshark = () => {
    // window.alert("see sharks");
    navigate(`/investors/${props.id}`);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Welcome Shark{" "}
            <span className="text-success">{invdata.investor}</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert
            show={show3}
            variant="success"
            onClose={() => setShow3(false)}
            dismissible
          >
            <Alert.Heading>
              Congratulations{" "}
              <span className="text-danger">{invdata.investor}</span> ! You have
              successfully made someone's day special! We have sent a
              confirmation mail to the Entrepreneur!
            </Alert.Heading>
            <p>You are the real Shark...</p>
          </Alert>
          <h6 className="text-info">
            {" "}
            Woohoo, you can invest even with a counter offer!
          </h6>
          <h6>
            You are investing to{" "}
            <span className="text-danger">{props.name} </span>
          </h6>

          <Form id="invest">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-success">
                Name <i className="bi bi-person"></i>
              </Form.Label>
              <Form.Control
                name="investor"
                onChange={handleChange}
                value={invdata.investor}
                type="text"
                placeholder="Enter your name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-warning">
                Comment <i className="bi bi-lightbulb"></i>
              </Form.Label>
              <FloatingLabel
                controlId="floatingTextarea2"
                label="write your shark minded thought..."
              >
                <Form.Control
                  value={invdata.comment}
                  name="comment"
                  onChange={handleChange}
                  as="textarea"
                  placeholder="write here"
                  style={{ height: "50px" }}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-success">
                Ammount <i className="bi bi-bank"></i>
              </Form.Label>
              <Form.Control
                name="ammount"
                value={invdata.ammount}
                onChange={handleChange}
                type="number"
                placeholder="Enter ammoumt to offer in INR"
              />
              <Form.Text className="text-muted">
                <span className="text-danger">
                  input should be in number only
                </span>
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-success">
                Equity <i className="bi bi-percent"></i>
              </Form.Label>
              <Form.Control
                name="equity"
                value={invdata.equity}
                onChange={handleChange}
                type="number"
                placeholder="Enter  percentage of equity which you want "
              />
              <Form.Text className="text-muted">
                <span className="text-danger">
                  input should be in number only
                </span>
              </Form.Text>
            </Form.Group>

            <Button variant="success" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <div id="userlist" className="container-fluid my-3 ">
        <Badge className="mx-2" bg="secondary">
          New
        </Badge>{" "}
        <Accordion className="my-1">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              {" "}
              <span className="text-danger">Title:</span>
              {props.title}
            </Accordion.Header>
            <Accordion.Body>{props.idea}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <ListGroup>
          <ListGroup.Item variant="info">Name: {props.name}</ListGroup.Item>
          <ListGroup.Item variant="warning">Mail: {props.email}</ListGroup.Item>
          <ListGroup.Item variant="success">
            Share willing to offer: {props.equity}
            <i className="bi bi-percent"></i>
          </ListGroup.Item>
          <ListGroup.Item variant="danger">
            Asked Ammount: <i className="bi bi-currency-rupee"></i>
            {props.askedammount}
          </ListGroup.Item>
        </ListGroup>
        <Button
          onClick={handleShow}
          className="my-3 mx-2"
          variant="success"
          size="md"
        >
          Invest <i className="bi bi-arrow-right"></i>
        </Button>{" "}
        <Button
          onClick={handleshark}
          className="my-2 mx-2"
          variant="outline-info"
          size="md"
        >
        Investors <i class="bi bi-eye"></i>
        </Button>{" "}
      </div>
    </>
  );
};
export default Pitchlist;
