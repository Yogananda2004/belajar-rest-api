const express = require('express');
const usersController = require('../controllers/users.js');
const router = express.Router();

router.get("/", usersController.GetAllUsers);

router.post("/", usersController.CreateUsers);

router.patch("/:idusers", usersController.updateUser);

router.delete("/:idusers", usersController.deleteUser);





module.exports = router;