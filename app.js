const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users.routes");
const categoriesRouter = require("./routes/categories.routes");
const activitiesRouter = require("./routes/activities.routes");
const organizationRouter = require("./routes/organization.routes");
const newRouter = require("./routes/new.routes");
const commentsRouter = require("./routes/comments.routes");
const membersRouter = require("./routes/members.routes");
const imagesRouter = require("./routes/images.routes");
const rolesRouter = require("./routes/roles.routes");
const slidesRouter = require("./routes/slides.routes");
const contactsRouter = require("./routes/contacts.routes");
const testimonyRouter = require("./routes/testimony.routes");

const app = express();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "ONG API",
      version: "1.0.0",
      description: "A simple express ONG API",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/activities", activitiesRouter);
app.use("/organization", organizationRouter);
app.use("/members", membersRouter);
app.use("/categories", categoriesRouter);
app.use("/comments", commentsRouter);
app.use("/news", newRouter);
app.use("/images", imagesRouter);
app.use("/roles", rolesRouter);
app.use("/slides", slidesRouter);
app.use("/contacts", contactsRouter);
app.use("/backoffice/contacts", contactsRouter);
app.use("/testimonials", testimonyRouter);
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res /* , next */) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
