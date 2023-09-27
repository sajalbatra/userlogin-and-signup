import UserModel from "../models/user.js";
import bcrypt from "bcrypt"; // Corrected import for bcrypt
import jwt from "jsonwebtoken"; // Corrected import for jwt

const userRegistration = async (req, res) => {
    const { name, email, password, passwordconfirm, tc } = req.body;

    // Check if the email is already registered
    const user = await UserModel.findOne({ email: email });
    
    if (user) {
        return res.status(400).json({ status: "failed", message: "Email is already registered" });
    }

    // Validate that all required fields are provided
    if (name && email && password && passwordconfirm && tc) {
        // Check if password and password confirmation match
        if (password === passwordconfirm) {
            try {
                // Hash the password before saving it
                const salt = await bcrypt.genSalt(10);
                const hashpassword = await bcrypt.hash(password, salt);
                
                const newUser = new UserModel({
                    name: name,
                    email: email,
                    password: hashpassword,
                    tc: tc
                });
                
                await newUser.save();
                
                res.status(200).json({ status: "success", message: "User registered successfully" });
            } catch (error) {
                console.error(error);
                res.status(500).json({ status: "failed", message: "Unable to register" });
            }
        } else {
            res.status(400).json({ status: "failed", message: "Passwords do not match" });
        }
    } else {
        res.status(400).json({ status: "failed", message: "All fields are required" });
    }
};

export default userRegistration;
