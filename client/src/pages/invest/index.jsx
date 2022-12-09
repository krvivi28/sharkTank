import React, { useEffect, useState } from "react";
import axios from "axios";
import Pitchlist from "../../common/components/pitchlist";
// import Icard from "../../common/components/card";
import "./invest.css";

const Invest = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    const res = await axios.get("/pitch");
    if (res.status === 201) {
      setdata(res.data);
    } else window.alert("server error in fetching data");
  };
  return (
    <>
      <div id="inv" className="container">
        <h1 className="text-success my-3">
          Hello, Sharks ! We have some wonderful Entrepreneur Ideas!
        </h1>
        <div id="ptable" className="container">
          {data.map((data, ind) => {
            return (
              <Pitchlist
                key={ind}
                email={data.email}
                title={data.title}
                idea={data.idea}
                name={data.name}
                askedammount={data.askedammount}
                id={data._id}
                arr={data.sharks}
                equity={data.equity}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Invest;
