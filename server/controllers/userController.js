const userdb = require("../database/user");

exports.getUsers = async (req, res) => {
  try {
    const users = await userdb.getUsers();

    return res.status(200).json({
      success: true,
      users: users,
      message: "Users retrieved successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error,
    });
  }
};

exports.addUser = async (req, res) => {
  try {
    const { firstName } = req.body;
    const { lastName } = req.body;

    if (firstName == "" || lastName == "") {
      return res.status(400).json({
        success: false,
        message: "Cannot add user",
      });
    }

    const results = await userdb.addUser(firstName, lastName);

    return res.status(200).json({
      success: true,
      results: results,
      message: "Added user successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error,
    });
  }
};

exports.searchUser = async (req, res) => {
  try {
    const { firstName } = req.body;
    const { lastName } = req.body;
    let users = [];

    if (firstName != "" && lastName != "") {
      users = await userdb.searchUser(firstName, lastName);
    } else if (firstName != "") {
      users = await userdb.searchUserFirstName(firstName);
    } else if (lastName != "") {
      users = await userdb.searchUserLastName(lastName);
    }

    return res.status(200).json({
      success: true,
      users: users,
      message: "User has been searched",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error,
    });
  }
};
