const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("hello , this is Sahadat");
});

app.listen(port, () => {
    console.log(`myapp listening on port ${port}`);
    
})