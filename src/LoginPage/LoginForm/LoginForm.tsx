import {useFormik} from "formik";
import React from "react";
import "./LoginForm.css"
import {NavLink, useNavigate} from "react-router-dom";
import LoginSvgGenerator from "./LabelSvgGenerator";

const LoginForm: React.FC = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values: any) => {
        },
    })
    return (
        <div className={"form__block"}>
            <form className={"form__block__content"} onSubmit={formik.handleSubmit}>
                <label className={"form__block__content__label"}>
                    <LoginSvgGenerator id={"email"}/>
                    <span className={"form__block__content__label__text"}>Email Address</span>
                </label>
                <input
                    className={"form__block__content__input"}
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <label className={"form__block__content__label"}>
                    <LoginSvgGenerator id={"password"}/>
                    <span className={"form__block__content__label__text"}>Password</span>
                </label>
                <input
                    className={"form__block__content__input"}
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <div className={"form__block__content__control"}>
                    <NavLink className={"form__block__content__link"} to={""}>Forgot password?</NavLink>
                    <button className={"form__block__content__button__SingIn"} type="submit">Submit</button>
                </div>
                <button className={"form__block__content__button"} onClick={() => navigate("/registration")}>
                    Don't have & account?
                </button>
            </form>
        </div>
    )
}

export default LoginForm;