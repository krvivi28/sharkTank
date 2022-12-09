import React from "react";
import Card from "react-bootstrap/Card";
const Homecard = (props) => {
  return (
    <>
      <Card className={"mx-1 my-1"} style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title className={props.color}>{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.subtitle}
          </Card.Subtitle>
          <Card.Text>{props.des}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Homecard;
