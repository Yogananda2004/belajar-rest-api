const userModel = require("../models/users");

//read user data
const GetAllUsers = async (req, res) => {
  try {
    const [data] = await userModel.getAllUsers();
    res.json({
      message: "get method success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      messege: "server error",
      serverMessage: error,
    });
  }
};
//create user data
const CreateUsers = async (req, res) => {
  const { body } = req;
  try {
    await userModel.createNewUsers(body);

    res.json({
      message: "create new user succes",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error,
    });
  }
};
//update user data
const updateUser = async (req, res) => {
  const { idusers } = req.params;
  const { body } = req;
  try {
    await userModel.updateUser(body, idusers);
    res.json({
      message: "update user succes",
      data: idusers,
      ...body,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error,
    });
  }
};

//delete user data
const deleteUser = async (req, res) => {
  const { idusers } = req.params;
  try {
    const [users] = await userModel.getUserById(idusers);
    
    if (users.length === 0) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    await userModel.deleteUser(idusers);
    res.json({
      message: "delete success",
      data: users[0],
    });
 
} catch (error) {
  console.error(error);
  res.status(500).json({
    message: "server error",
    serverMessage: error.message
  });
}

};

module.exports = { GetAllUsers, updateUser, deleteUser, CreateUsers };
