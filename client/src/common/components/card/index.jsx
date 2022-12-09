import Card from "react-bootstrap/Card";

import "./card.css";

function Sharkcard(props) {
  return (
    <>
      <Card
        bg={"dark"}
        key={props.ind}
        text={"white"}
        style={{ width: "25rem" }}
        className="mb-2 mx-3"
      >
        <Card.Header>
          Shark Name: <span className="text-danger">{props.name}</span>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            {"Offered Ammount:"}{" "}
            <span className="text-success">&#x20b9;{props.ammount}</span>{" "}
          </Card.Title>
          <Card.Title>
            {"Offered Equity:"}{" "}
            <span className="text-info">{props.equity}% </span>{" "}
          </Card.Title>
          <Card.Text>
            comment: <span className="text-warning">{props.comment}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Sharkcard;
