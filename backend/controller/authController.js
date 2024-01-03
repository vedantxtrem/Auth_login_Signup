
const userModel = require('../model/userSchema')
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');


const signup = async (req, res, next) => {

    const { name, email, password, conformPassword } = req.body;
    console.log(name, email, password, conformPassword);

    if (!name || !email || !password || !conformPassword) {
        return res.status(400).json({
            success: false,
            message: "every field is required"
        })
    }

    const validEmail = emailValidator.validate(email);
    if (!validEmail) {
        return res.status(400).json({
            success: false,
            message: "please provide valid email id"
        })
    }

    if (password != conformPassword) {
        return res.status(400).json({
            success: false,
            message: "please provide valid email id"
        })
    }

    try {
        const userInfo = userModel(req.body);

        const result = await userInfo.save();

        return res.status(200).json({
            success: true,
            data: result
        })
    }
    catch (e) {
        if (e.code === 11000) {
            return res.status(400).json({
                success: false,
                message: 'account alreday exist'
            })
        }
        return res.status(400).json({
            success: false,
            message: e.message
        })
    }
}

const signIn = async (req, res, next) => {
    const { email, password } = req.body;
  
    // send response with error message if email or password is missing
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "email and password are required"
      });
    }
  
    try {
      // check user exist or not
      const user = await userModel
        .findOne({
          email
        })
        .select("+password");
  
      // If user is null or the password is incorrect return response with error message
      if (!user || !(await bcrypt.compare(password, user.password))) {
        // bcrypt.compare returns boolean value
        return res.status(400).json({
          success: true,
          message: "invalid credentials"
        });
      }
  
      // Create jwt token using userSchema method( jwtToken() )
      const token = user.jwtToken();
      user.password = undefined;
  
      const cookieOption = {
        maxAge: 24 * 60 * 60 * 1000, //24hr
        httpOnly: true //  not able to modify  the cookie in client side
      };
  
      res.cookie("token", token, cookieOption);
      res.status(200).json({
        success: true,
        data: user
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }
  };
  

const getUser = async (req, res, next) => {
    const userId = req.user.id;

    try {
        const user = await userModel.findById(userId);
        return res.status(200).json({
            success: true,
            data: user
        })
    } catch (e) {
        return res.status(400).json({
            success: false,
            message: e.message
        })
    }
};
const Logout = (req, res) => {
    try {
        const cookieOption = {
            expires: new Date(),
            httpOnly: true
        };
        res.cookie("token", null, cookieOption);
        res.status(200).json({
            success: true,
            message: "logout "
        })
    }
    catch (e) {
        res.status(400).json({
            success: false,
            message: e.message
        })

    }
};

module.exports = {
    signup,
    signIn,
    getUser,
    Logout
}