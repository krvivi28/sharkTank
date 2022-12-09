import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sharkcard from "../../common/components/card";
import "./sharks.css";
import { useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const Sharks = () => {
    const [show, setShow] = useState(false);
    const navigate=useNavigate();
  const params = useParams();
  const [sharks, setSharks] = useState([]);
  useEffect(() => {
    getSharks();
  }, []);

  const getSharks = async () => {
    const res = await axios.get(`/sharks/:${params.id}`);
    setSharks(res.data);
    if(res.data=="")
    {
        setShow(true);
        setTimeout(()=>
        {
            navigate("/invest");
        },3000)
        
    }
  };
  return (
    <>
   <Alert show={show} variant="danger">
        <Alert.Heading>No, Investments made yet!</Alert.Heading>
        <p>
        thx for visiting!!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-danger">
            Close me y'all!
          </Button>
        </div>
      </Alert>
      <div className="container">
        {sharks!=""?<h1 className="text-success">Shark's Investements</h1>:""}
      </div>

      <div id="shark" className="container">
        {sharks.map((data, ind) => {
          return (
            <Sharkcard
              key={ind}
              name={data.investor}
              comment={data.comment}
              ammount={data.ammount}
              equity={data.equity}
            />
          );
        })}
      </div>
    </>
  );
};
export default Sharks;
