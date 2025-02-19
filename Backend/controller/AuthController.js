const User = require("../model/UserModel");

const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
const { email, password, username, createdAt } = req.body;
const existingUser = await User.findOne({ email });
if (existingUser) {
  return res.status(409).json({ message: "User already exists" });
}
const hashedPassword = await bcrypt.hash(password, 12);
const user = await User.create({ email, password: hashedPassword, username, createdAt });

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    });

    res.status(201).json({ 
      message: "User signed in successfully", 
      success: true,
      userId: user._id,
      email: user.email
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred during signup", error: error.message });
  }

};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
     res.status(201).json({ message: "User logged in successfully", success: true });
     next()
  } catch (error) {
    console.error(error);
  }
}
