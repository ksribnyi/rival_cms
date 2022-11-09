import React, {useEffect, useState} from "react";
import {useFormik} from "formik";
import "./LoginForm.css"
import {NavLink, useNavigate} from "react-router-dom";
import LabelSvgGenerator from "../../SvgGenerator/LabelSvgGenerator";
import LoginSchema from "../../utils/LoginForm.shema";
import Popup from "../../ContentPage/CreatePage/CreatePageForm/Popup";

const LoginForm = ({
                       loginUser,
                       authorized,
                       statusAuth,
                       setStatusAuth
                   }: { loginUser: any, authorized: boolean, statusAuth: boolean, setStatusAuth: any}) => {
    const navigate = useNavigate()
    const [push, setPush] = useState(false)
    useEffect(() => {
        if (authorized) {
            navigate("/content/list_pages")
        }
    }, [push, authorized, navigate])
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: LoginSchema,
        onSubmit: (values: any) => {
            loginUser(values.email, values.password)
            setPush(!push)
            setTimeout(() => {
                setStatusAuth(false)
            }, 2000)
        }
    })
    return (
        <div className={"form__block"}>
            <form className={"form__block__content"} onSubmit={formik.handleSubmit}>
                <label className={"form__block__content__label"}>
                    <LabelSvgGenerator id={"mail"}/>
                    <span className={"form__block__content__label__text"}>Email Address</span>
                </label>
                <input
                    className={formik.errors.email && formik.touched.email ?
                        "form__block__content__input form__block__content__input__error" :
                        "form__block__content__input"}
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email &&
                <span className="form__block__content__error-massage">{formik.errors.email}</span>}
                <label className={"form__block__content__label"}>
                    <LabelSvgGenerator id={"lock"}/>
                    <span className={"form__block__content__label__text"}>Password</span>
                </label>
                <input
                    className={formik.errors.password && formik.touched.password ?
                        "form__block__content__input form__block__content__input__error" :
                        "form__block__content__input"}
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.errors.password && formik.touched.password &&
                <span className="form__block__content__error-massage">{formik.errors.password}</span>}
                <div className={"form__block__content__control"}>
                    <NavLink className={"form__block__content__link"} to={""}>Forgot password?</NavLink>
                    <button className={"form__block__content__button__SingIn"} type="submit">Submit</button>
                </div>
                <button className={"form__block__content__button"} type={"button"}
                        onClick={() => navigate("/registration")}>
                    Don't have & account?
                </button>
            </form>
            {statusAuth && <Popup text={"Invalid email or password"}/>}
        </div>
    )
}

export default LoginForm;