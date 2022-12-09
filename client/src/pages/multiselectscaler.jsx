// import React, { useEffect, useState } from "react";
// import wall2 from "../common/assets/final.jpg";
// import Button from "react-bootstrap/Button";
// import axios from "axios";
// import Select from "react-select";
// import "./home.css";
// const Home = () => {
//   const [user, setUser] = useState({ name: "", email: "",status:"" });
//   const [sel, setsel] = useState();
//   const [app, setapp] = useState([]);
//   const start="28Nov 02:00";
//   useEffect(() => {
//     getapp();
//   }, []);
//   const getapp = async () => {
//     const adata = await axios.get("/app");

//     setapp(adata.data);
//     console.log(app);
//   };
//   const options = [
//     { value: "6384290bb59a6210e9053554", label: "vivek@gmail.com" },
//     { value: "63842913b59a6210e9053556", label: "vivek2@gmail.com" },
//     { value: "6384291cb59a6210e9053558", label: "vivek3@gmail.com" },
//   ];
//   const handlechange = (e) => {
//     console.log(e.target.name);
//     console.log(e.target.value);
//     var { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };
//   const submit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("/", {
//         name: user.name,
//         email: user.email,
//         status:user.status,
//       });
//       // const res = await fetch("/", {
//       //   method: "post",
//       //   headers: {
//       //     "Content-Type": "application/json",
//       //   },
//       //   body: JSON.stringify({
//       //     name: user.name,
//       //     email: user.email,
//       //   }),
//       // });
//       if (res.status === 200) window.alert("applied");
//       else window.alert("error res");
//     } catch (error) {
//       console.log("client error");
//     }
//   };

//   const handleselect = (e) => {
//     // console.log(e.target.name);
//     setsel(Array.isArray(e)?e.map(x=>x.value):[]);
//     // setsel(e.target.value);
//     // console.log(sel);
//   };
//   const selfn=async()=>
//   {
//     const size=sel;
    
//     if(size.length<2)
//     {
//       window.alert("pls select atleast two candidates");
//       return;
//     }
//     const sch=await axios.post("/sch",
//     {
//       alli:sel,
//       start:start
//     });
//     if(sch.status===200)
//     {
//       window.alert("scheduled");
//     }
//     else
//     {
//       window.alert("post error");
//     }
//   }
//   // const handlechange = (e) => {
//   //   // const value=e.target.value;
//   //   // const name=e.target.name;
//   //   const { name, value } = e.target;
//   //   // console.log(value);
//   //   // console.log(name);

//   //   setUser((prev) => {
//   //     return {
//   //       ...prev,
//   //       [name]: value,
//   //     };
//   //   });
//   // };

//   // const submit = (e) => {
//   //   e.preventDefault();
//   // };
//   console.log("the set val is");
//   console.log(sel);
//   return (
//     <>
//       <div
//         id="welcome"
//         className="bg-dark text-secondary px-4 py-2 text-center"
//       >
//         <div id="welcome" className="py-5">
//           {/* <h1 className="display-5 fw-bold text-white">CRIO.DO</h1> */}
//           {/* <h1 className="display-5 fw-bold text-success">XHARK TANK</h1> */}
//           <h2 id="textChange" className="display-4 fw-bold">
//             {/* <span style="color: green; font-size: smaller" className="auto-type"></span> */}
//           </h2>
//           <div className="col-lg-6 mx-auto">
//             <p className="fs-5 mb-4">
//               {/* Tap the Pitch Your Idea button to create a new pitch. */}
//             </p>
//             <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
//               <p></p>
//               {/* <Button size="lg" variant="outline-info">
//                 + Pitch Your Idea
//               </Button>{" "}
//               <Button size="lg" variant="outline-info">
//                 + Pitch Your Idea
//               </Button>{" "} */}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container">
//         <form onSubmit={submit}>
//           <h1>
//             {sel}Hello: {user.name} with pass: {user.pass}
//           </h1>
//           <input
//             name="name"
//             style={{ fontSize: "20px", marginTop: "20px" }}
//             type="text"
//             onChange={handlechange}
//             value={user.name}
//           />
//           <input
//             style={{ fontSize: "20px", marginTop: "20px" }}
//             type="email"
//             name="email"
//             value={user.email}
//             onChange={handlechange}
//           />
//           <input
//             style={{ fontSize: "20px", marginTop: "20px" }}
//             type="text"
//             name="status"
//             value={user.status}
//             onChange={handlechange}
//           />
//           {app.map((data)=>
//           {
//             return data.email;
//           })}{"  "} 
//           <Select onChange={handleselect} isMulti options={options} />
//           <button onClick={selfn} className="btb btn-warning">schall</button>

//           <button className="btn btn-success mx-2" type="submit">
//             submit
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };
// export default Home;
