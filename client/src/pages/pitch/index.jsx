import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "./pitch.css";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";

const Pitch = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [pitchData, setpitchData] = useState({
    name: "",
    email: "",
    title: "",
    idea: "",
    askedammount: "",
    equity: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    console.log(name);
    console.log(value);
    setpitchData({ ...pitchData, [name]: value });
  };
  const handleSubmit = async (e) => {
    // const { name, email, title, idea, askedammount, equity } = pitchData;
    e.preventDefault();
    if (
      pitchData.name === "" ||
      pitchData.email === "" ||
      pitchData.title === "" ||
      pitchData.idea === "" ||
      pitchData.askedammount === "" ||
      pitchData.equity === ""
    ) {
      setShow2(true);
      // window.alert("all fields are required");
      return;
    }
    const res = await axios.post("/pitch", {
      name: pitchData.name,
      email: pitchData.email,
      title: pitchData.title,
      idea: pitchData.idea,
      askedammount: pitchData.askedammount,
      equity: pitchData.equity,
    });
    if (res.status === 201) {
      setShow(true);
      setShow2(false);
      // navigate("/apply");
      setpitchData({
        name: "",
        email: "",
        title: "",
        idea: "",
        askedammount: "",
        equity: "",
      });
    } else {
      window.alert("server error");
    }
  };
  return (
    <>
      <div id="formcont" className="container my-3">
        <h1 className="text-success">Pitch Your Idea!</h1>

        <Form id="pitch">
          <Alert
            show={show2}
            variant="danger"
            onClose={() => setShow2(false)}
            dismissible
          >
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>please fill valid details with no empty input fields...</p>
          </Alert>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-success">
              Email address <i className="bi bi-envelope-at"></i>
            </Form.Label>
            <Form.Control
              name="email"
              onChange={handleChange}
              value={pitchData.email}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted ">
              <span className="text-success">
                {" "}
                We'll never share your email with anyone else.
              </span>
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-success">
              Name <i className="bi bi-person"></i>
            </Form.Label>
            <Form.Control
              name="name"
              value={pitchData.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter your full name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-success">
              Title <i className="bi bi-airplane"></i>
            </Form.Label>
            <Form.Control
              name="title"
              value={pitchData.title}
              onChange={handleChange}
              type="text"
              placeholder="Enter your pitch title"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-warning">
              Your Idea <i className="bi bi-lightbulb"></i>
            </Form.Label>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="write your idea..."
            >
              <Form.Control
                value={pitchData.idea}
                name="idea"
                onChange={handleChange}
                as="textarea"
                placeholder="write here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-success">
              askedammount <i className="bi bi-bank"></i>
            </Form.Label>
            <Form.Control
              name="askedammount"
              value={pitchData.askedammount}
              onChange={handleChange}
              type="number"
              placeholder="Enter askammoumt in INR"
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
              value={pitchData.equity}
              onChange={handleChange}
              type="number"
              placeholder="Enter  percentage of equity ready to shed "
            />
            <Form.Text className="text-muted">
              <span className="text-danger">
                input should be in number only
              </span>
            </Form.Text>
          </Form.Group>
          <Alert className="my-2" show={show} variant="success">
            <Alert.Heading>Congratulations! {pitchData.name}</Alert.Heading>
            <p>
              you have successfully created your pitch, we have sent you a
              confirmation mail. Thx for your time!! We will let you know once a
              shark shows interest in your idea. <br />
              Till then you can pitch more ideas..
            </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShow(false)} variant="outline-success">
                Close me y'all!
              </Button>
            </div>
          </Alert>

          <Button variant="success" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};
export default Pitch;
