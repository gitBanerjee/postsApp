const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", async (req, res) => {
  const { type, data: prevData } = req.body;

  if (type === "CommentCreated") {
    const status = prevData.content.includes("orange")
      ? "rejected"
      : "approved";
    await axios
      .post("http://event-bus-srv:4005/events", {
        type: "CommentModerated",
        data: { ...prevData, status },
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  res.send({});
});

app.listen(4003, () => {
  console.log("Listening on port 4003");
});
