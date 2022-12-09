const express = require("express");
const app = express();
require("./db/db");
const port = process.env.PORT || 5000;
const Register = require("./model/user");
app.use(express.json());
var nodemailer = require("nodemailer");
const path = require("path");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "crio.xharktank@gmail.com",
    pass: "wxdcpvhkzdhurrhj",
  },
});

app.post("/pitch", async (req, res) => {
  try {
    const data = new Register({
      name: req.body.name,
      email: req.body.email,
      title: req.body.title,
      idea: req.body.idea,
      askedammount: req.body.askedammount,
      equity: req.body.equity,
    });
    var mailOptions = {
      from: "crio.xharktank@gmail.com",
      to: `${req.body.email}`,
      subject: "Crio.Do XharkTank Pitch Created Successfully",
      text: `Dear ${req.body.name},
Congratulations! You have successfully created your pitch.

We appreciate your interest in crio.do. We will carefully consider your pitch during the initial screening and will contact you if you are selected to continue on the investement process.

We’re excited you’ve taken the first step to Join us!

• Visiting our website on http://criodo.com
• Following our Social handles on Twitter, Instagram, LinkedIn

Beware of misleading advertisements and fraudulent communication issuing 'offer letters' on behalf of Scaler in exchange for a fee. Stay Alert! 

To avoid any instance of fraud, when receiving communication from Scaler please look for our authentic Scaler e-mail id format : crio.xharktank@gmail.com.

Best Regards
Crio,Do`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    let sdata = await data.save();
    res.status(201).send(sdata);
  } catch (error) {
    res.status(401).send(error);
  }
});
app.post("/pitch/:pitch_id/makeoffer", async (req, res) => {
  const _id = req.params.pitch_id;
  const { investor, ammount, equity, comment } = req.body;
  try {
    const data = await Register.findOne({ _id });
    const udata = await Register.findOneAndUpdate(
      { _id },
      { $push: { sharks: { investor, ammount, equity, comment } } }
    );
    var mailOptions = {
      from: "crio.xharktank@gmail.com",
      to: `${data.email}`,
      subject: "Investment received from CRIO.DO XHARKTANK",
      text: `Dear ${data.name},
Congratulations! You have received an investment offer of INR ${ammount} from the shark ${investor}.

The shark showed an interest with counter equity of ${equity}%.

The comment from the shark is:
${comment}.

We’re excited you’ve taken the first step to Join us!

• Visiting our website on http://criodo.com
• Following our Social handles on Twitter, Instagram, LinkedIn

Beware of misleading advertisements and fraudulent communication issuing 'offer letters' on behalf of Scaler in exchange for a fee. Stay Alert! 

To avoid any instance of fraud, when receiving communication from Scaler please look for our authentic Scaler e-mail id format : crio.xharktank@gmail.com.

Best Regards
Crio,Do`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        // console.log("Email sent: " + info.response);
      }
    });
    res.status(201).send(udata);
  } catch (error) {
    res.status(401).send(error);
  }
});
app.get("/pitch", async (req, res) => {
  try {
    const data = await Register.find({});
    res.status(201).send(data);
  } catch (error) {
    res.status(401).send(error);
  }
});
app.get("/sharks/:id", async (req, res) => {
  const _id = req.params.id.slice(1);
  // console.log(_id);
  try {
    const data = await Register.findOne({ _id });

    res.status(201).send(data.sharks);
  } catch (error) {
    res.status(400).send("fetch error sharks ");
  }
});

// if (process.env.NODE_ENV == "production") {
//   app.use(express.static("client/build"));
//   const path = require("path");
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }
app.use(express.static(path.join(__dirname, "client","build")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`server running at ${port}`);
});
