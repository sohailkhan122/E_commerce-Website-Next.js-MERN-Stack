const express = require('express')
const { registerController, loginController, updateUser, getUserByIdController, getAllUsers } = require('../Controller/userController')

const Router = express.Router();

Router.post('/login', loginController);
Router.post('/register', registerController);
Router.put('/updateUser/:userId', updateUser);
Router.get('/getUserById/:userId', getUserByIdController);
Router.get('/getAllUsers', getAllUsers)

module.exports = Router;    