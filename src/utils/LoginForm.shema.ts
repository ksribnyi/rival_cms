import * as Yup from "yup";
import {REG_EXP_EMAIL, REG_EXP_PASSWORD} from "./RegularExpressions";

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email")
        .max(250, "Too Long!")
        .matches(REG_EXP_EMAIL, "Not valid email")
        .required("Required"),
    password: Yup.string()
        .min(10, "Too Short!")
        .max(30, "Too Long!")
        .matches(REG_EXP_PASSWORD, "Not valid password")
        .required("Required")
});

export default LoginSchema