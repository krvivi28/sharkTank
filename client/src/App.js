import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router-dom";
import Navmain from "./common/components/navbar";
import Home from "./pages/home";
import Pitch from "./pages/pitch";
import Invest from "./pages/invest";
import Sharks from "./pages/sharks";
// import Footer from "./common/components/footer";

const App = () => {
  return (
    <>
      <Navmain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Pitch />} />
        <Route path="/invest" element={<Invest/>} />
        <Route path="/investors/:id" element={<Sharks/>} />
        {/* <Route path="/apply" element={<Apply/>}/>
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/schedule/:id" element={<Schedule/>} />
        <Route path="/edit/:id" element={<Edit/>} />
        <Route path="/del/:id" element={<Del/>} /> */}
      </Routes>
      {/* <Footer/> */}
    </>
  );
};
export default App;
