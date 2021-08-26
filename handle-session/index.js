const express = require("express");
const session = require("express-session");
const PORT = 3000;

const app = express();

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "keyboard cat",
  })
);

app.get("/", (req, res) => {
  req.session.count = req.session.count ? req.session.count + 1 : 1;
  res.status(200).json({ Hello: "World", counter: req.session.count });
});

app.listen(PORT, () => {
  console.log(`Express server listening on http://localhost:${PORT}`);
});
