require("dotenv").config();

const express = require('express');
const { connectToMongoDB } = require("./connect");
const URL = require('./models/url');
const path = require('path');
const cookieParser = require("cookie-parser");
const {checkForAuthentication, restrictTo} = require('./middlewares/auth');

const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const userRoute = require("./routes/user");

const app = express();
const PORT = process.env.PORT || 8001;

app.set("view engine", "ejs");
app.set('views', path.resolve("./views"));

connectToMongoDB(process.env.MONGODB_URL)
  .then(() => { console.log("MongoDB Connected!") });

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(checkForAuthentication);


app.use("/url", urlRoute);
app.use("/user", userRoute);
app.use("/", staticRoute);


app.get('/url/:shortId', restrictTo(["NORMAL"]), async (req, res) => {
  const shortId = req.params.shortId;
  // entry is a document - updated document
  const entry = await URL.findOneAndUpdate({
    shortId
  }, {
    $push: {
      visitHistory: {
        timestamp : Date.now(),
      },
    },
  }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => {
  console.log(`Server Started at PORT: ${PORT}`);
}); 