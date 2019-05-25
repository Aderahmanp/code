const User = require("../models/user");

exports.Create = (req, res) => {
  let user = Object.assign(req.body);
  const newuser = { ...user };
  return User.create(newuser)
    .then(data => {
      res.status(201).json({
        success: true,
        message: "successful",
        data: data
      });
    })
    .catch(err => {
      res.status(400).json({
        success: false,
        message: err.message
      });
    });
};
