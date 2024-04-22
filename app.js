const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const rateLimit = require("express-rate-limit"); // limitira broj req u odredjenom intervalu vremena
// const helmet = require("helmet");
// const mongoSanitize = require("express-mongo-sanitize");
// const xss = require("xss-clean");
// const hpp = require("hpp");

const app = express();
app.use(cors());
app.use(bodyParser.json());
// const morgan = require("morgan");

// const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
// const userRouter = require("./routes/userRoutes");
// const postRouter = require("./routes/postRoutes");
// const commentRouter = require("./routes/commentRoutes");
// const categoryRouter = require("./routes/categoryRoutes");
// const imageRouter = require("./routes/imageRoutes");
// const tagRouter = require("./routes/tagRoutes");
// const featuredPostRouter = require("./routes/featuredPostRoutes");
// const fileRouter = require("./routes/fileRoutes");
// const advertisementRouter = require("./routes/advertisementRoutes");
const userRouter = require("./routes/userRoutes");

// const viberRouter = require("./routes/viberRouter");

console.log(process.env.NODE_ENV);
// GLOBAL MIDDLEWARES

// // Security HTTP headers
// app.use(helmet());

// // Development login
// if (process.env.NODE_ENV === "development") {
//   app.use(morgan("dev"));
// }

// // Limit request API
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000,
//   limit: 1000,
//   message: "Previše zahtjeva sa iste IP adrese, pokušajte ponovo za 15 minuta!",
//   legacyHeaders: false,
// });
// app.use("/api/v1/users/", limiter);

// // Body parser, reading data from body into req.body
// app.use(bodyParser.json({ limit: "20mb" }));

// // Data sanitization against NoSQL query injection
// app.use("/api/v1/users", mongoSanitize());

// // Data sanitization agaist XSS
// app.use("/api/v1/users", xss());

// // Prevent parameter pollution
// app.use(
//   hpp({
//     whitelist: ["visits", "commentsCount"],
//   })
// );

// // Serving static files
// app.use(express.static(`${__dirname}/public`));

// // Test middleware
// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//   next();
// });

app.use("/api/v1/user", userRouter);
// app.use("/api/v1/users", userRouter);
// app.use("/api/v1/post", postRouter);
// app.use("/api/v1/comment", commentRouter);
// app.use("/api/v1/category", categoryRouter);
// app.use("/api/v1/image", imageRouter);
// app.use("/api/v1/tag", tagRouter);
// app.use("/api/v1/featuredPost", featuredPostRouter);
// app.use("/api/v1/file", fileRouter);
// app.use("/api/v1/advertisement", advertisementRouter);

// app.use("/api/v1/kosnica", viberRouter);

// // app.use((err, req, res, next) => {
// //   res.status(err.status || 500).json({
// //     status: "error",
// //     message: err.message,
// //   });
// // });

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
