import React from "react";
import "./home.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Homecard from "../../common/components/homecard";



const Home = () => {
  return (
    <>
      <div
        id="welcome"
        className="bg-dark text-secondary px-4 py-2 text-center"
      >
        <div id="welcome" className="py-5">
          <h1 id="head" className="display-1 fw-bold text-white opacity-75">
            ECHO.DO
          </h1>
          <h2 id="h2" className="display-5 fw-bold text-info">
            SHARK TANK
          </h2>

          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-2 comm">
              SharkTank is a panel of potential investors, termed as "Sharks",
              who listen to entrepreneurs pitch ideas for a business or product
              they wish to develop.
            </p>
            <p className="text-info comm">
              Tap the Pitch Your Idea button to create a new pitch.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <p></p>

              <Link to="/apply">
                <Button size="lg" variant="outline-info my-1 mx-2">
                  Pitch Your Idea <i className="bi bi-arrow-right"></i>
                </Button>{" "}
              </Link>
              <Link to="/invest">
                <Button size="lg" variant="outline-info my-1 mx-2">
                  Invest Now <i className="bi bi-arrow-right"></i>
                </Button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id="homecard" className="container d-flex">
        <Homecard
          color="text-danger"
          title="Shark Tank"
          des="Shark Tank is an American business reality television series that premiered on August 9, 2009, on ABC.[1] The show is the American franchise of the international format Dragons' Den, which originated in Japan as Money Tigers in 2001.[2] It shows entrepreneurs making business presentations to a panel of five investors or 'sharks', who decide whether to invest in their companies."
        />
        <Homecard
          color="text-success"
          title="Early seasons (2009–2013)"
          des="Shark Tank premiered in August 2009 and aired 14 episodes through January 2010. In August, it was renewed for a second season.
Season 2 premiered with a sneak peek episode on Sunday, March 20, 2011, before resuming its regular Friday night time slot on March 25, 2011. Season 2 had 9 episodes, 5 of them featuring new panel members."
        />

        <Homecard
          title="Premise"
          color="text-info"
          des="The show features a panel of investors called sharks, who decide whether to invest as entrepreneurs make business presentations on their company or product.[4][5] The sharks often find weaknesses and faults in an entrepreneur's product, business model or valuation of their company.[6] Some of the investors are usually kindhearted and try to soften the impact of rejection."
        />
      </div>
    </>
  );
};
export default Home;
