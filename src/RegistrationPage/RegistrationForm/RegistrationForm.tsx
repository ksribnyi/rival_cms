import React from "react";
import "./RegistrationForm.css"
import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";
import LabelSvgGenerator from "../../SvgGenerator/LabelSvgGenerator";

const RegistrationForm: React.FC = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },
        onSubmit: (values: any) => {
        },
    })
    return (
        <div className={"formRegister__block"}>
            <form className={"formRegister__block__content"} onSubmit={formik.handleSubmit}>
                <label className={"formRegister__block__content__label"}>
                    <LabelSvgGenerator id={"user"}/>
                    <span className={"formRegister__block__content__label__text"}>Full name</span>
                </label>
                <input
                    className={"formRegister__block__content__input"}
                    id="name"
                    name="name"
                    type="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                <label className={"formRegister__block__content__label"}>
                    <LabelSvgGenerator id={"mail"}/>
                    <span className={"formRegister__block__content__label__text"}>Email Address</span>
                </label>
                <input
                    className={"formRegister__block__content__input"}
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <label className={"formRegister__block__content__label"}>
                    <LabelSvgGenerator id={"lock"}/>
                    <span className={"formRegister__block__content__label__text"}>Password</span>
                </label>
                <input
                    className={"formRegister__block__content__input"}
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <div className={"formRegister__block__content__control"}>
                    <button className={"formRegister__block__content__button__register"} type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}

export default RegistrationForm;