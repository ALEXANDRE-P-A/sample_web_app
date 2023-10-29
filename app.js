const express = require("express");

const PORT = 3000;

const app = express();

app.get("/",(req, res) => {
  res.end("This is a sample web application.");
});

app.listen(PORT,_=>{
  console.log(`Application listening at http://127.0.0.1:${PORT}`);
});