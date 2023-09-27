import mongoose from "mongoose";
import validator from "validator";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                return validator.isEmail(value);
            },
            message: "Invalid email address",
        },
    },
    password: {
        type: String,
        required: true,
        // validate: {
        //     validator: (value) => {
        //         const alphanumericRegex = /^[a-zA-Z0-9]*$/;
        //         return alphanumericRegex.test(value);
        //     },
        //     message: "Invalid password: must contain only letters and numbers",
        // },
    },
    passwordconfirm: {
        type: String,
        // required: true,
        // validate: {
        //     validator: function (value) {
        //         return value === this.password;
        //     },
        //     message: "Passwords do not match",
        // },
    },
    tc: {
        type: Boolean,
        required: true,
    },
});

const UserModel = mongoose.model("user", userSchema);

export default UserModel;
