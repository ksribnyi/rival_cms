import * as Yup from "yup";
import {REG_EXP_EMAIL, REG_EXP_NAME, REG_EXP_PASSWORD} from "./RegularExpressions";

const RegistrationSchema = Yup.object().shape({
    name: Yup.string()
        .min(1, "Too Short!")
        .max(200, "Too Long!")
        .matches(REG_EXP_NAME, "Not valid name")
        .required("Required"),
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

export default RegistrationSchema