const UserModel = require('../models/userModel')
const expressAsyncHandler = require("express-async-handler");
const generateToken = require('../Config/generateToken');

const loginController = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Please fill in all the fields" });
  }
  const user = await UserModel.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.status(200).json(user);
  } else {
    res.status(401).json({ error: "Invalid UserName or Password" });
  }
});


const registerController = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ mes: "All necessary input field have not filled" })
  }

  const userExist = await UserModel.findOne({ email });
  if (userExist) {
    res.status(422);
    throw new Error("User Already Exists");
  }

  const user = new UserModel({ name, email, password });
  await user.save();
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    })
    console.log(user._id)
  } else {
    res.status(400);
    throw new Error("Registration Error");
  }
});

const updateUser = async (req, res) => {
  const {
    name,
    lastname,
    region,
    companyname,
    streetadress,
    unit,
    city,
    state,
    phone,
    postalcode,
    deliveryinstruction,
  } = req.body;
  const { userId } = req.params

  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    user.name = name;
    user.lastname = lastname;
    user.region = region;
    user.companyname = companyname;
    user.streetadress = streetadress;
    user.unit = unit;
    user.city = city;
    user.state = state;
    user.phone = phone;
    user.postalcode = postalcode;
    user.deliveryinstruction = deliveryinstruction;

    await user.save();

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: 'Error updating user: ' + error.message });
  }
};

const getUserByIdController = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await UserModel.findById(userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({
      name: user.name,
      lastname: user.lastname,
      region: user.region,
      companyname: user.companyname,
      streetadress: user.streetadress,
      unit: user.unit,
      city: user.city,
      state: user.state,
      phone: user.phone,
      postalcode: user.postalcode,
      deliveryinstruction: user.deliveryinstruction,
    });
  } catch (error) {
    console.error('Error retrieving user by ID:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch users' });
  }
};



module.exports = { registerController, loginController, updateUser, getUserByIdController, getAllUsers }