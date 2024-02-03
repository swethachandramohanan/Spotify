import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../schema/user.schema.js';

const { sign } = jwt;

export async function registerUser(req, res) {
  try {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).send('Username already exists!!!');
    }

    const hashPass = await bcrypt.hash(password, 10);

   

    const result = await User.create({
      name,
      email,
      password: hashPass,
  
    });

    if (result) {
      return res.json('Registration Successful');
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send('Error occurred');
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({email });

    if (!user) {
      return res.status(401).json({ error: "Invalid EmailId or password" });
    }
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ error: "Invalid EmailId or password" });
    }

    const token = sign(
      {
       email: user.email,
        id: user._id,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "24h",
      }
    );

    res.status(200).json({
      msg: "Login Successful",
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error occurred" });
  }
}