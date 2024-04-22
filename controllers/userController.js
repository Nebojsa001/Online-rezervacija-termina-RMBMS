const catchAsync = require("./../utils/catchAsync");
const appError = require("./../utils/appError");
const User = require("../models/userModel");

// exports.signup = catchAsync(async (req, res, next) => {
//   console.log(req.body.firstName);

//   const newUser = await User.create({
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email,
//     role: req.body.role,
//   });

//   if (!newUser) {
//     return next(new appError("User nije kreiran!"), 400);
//   }
//   res.status(200).json({
//     status: "success",
//     messasge: "User je uspjesno kreiran!",
//     newUser,
//   });
// });
