import React from "react";
import "./RegistrationForm.css"
import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";
import LabelSvgGenerator from "../../SvgGenerator/LabelSvgGenerator";
import RegistrationSchema from "../../utils/RegistrationForm.shema";

const RegistrationForm = ({registrationUser}: { registrationUser: any }) => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },
        validationSchema: RegistrationSchema,
        onSubmit: (values: any) => {
            registrationUser({userName: values.name, email: values.email, password: values.password, admin: false})
            navigate("/login")
        }
    })
    return (
        <div className={"formRegister__block"}>
            <form className={"formRegister__block__content"} onSubmit={formik.handleSubmit}>
                <label className={"formRegister__block__content__label"}>
                    <LabelSvgGenerator id={"user"}/>
                    <span className={"formRegister__block__content__label__text"}>Full name</span>
                </label>
                <input
                    className={formik.errors.name && formik.touched.name ?
                        "formRegister__block__content__input formRegister__block__content__input__error" :
                        "formRegister__block__content__input"}
                    id="name"
                    name="name"
                    type="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                {formik.errors.name && formik.touched.name &&
                <span className="formRegister__block__content__error-massage">{formik.errors.name}</span>}
                <label className={"formRegister__block__content__label"}>
                    <LabelSvgGenerator id={"mail"}/>
                    <span className={"formRegister__block__content__label__text"}>Email Address</span>
                </label>
                <input
                    className={formik.errors.email && formik.touched.email ?
                        "formRegister__block__content__input formRegister__block__content__input__error" :
                        "formRegister__block__content__input"}
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email &&
                <span className="formRegister__block__content__error-massage">{formik.errors.email}</span>}
                <label className={"formRegister__block__content__label"}>
                    <LabelSvgGenerator id={"lock"}/>
                    <span className={"formRegister__block__content__label__text"}>Password</span>
                </label>
                <input
                    className={formik.errors.password && formik.touched.password ?
                        "formRegister__block__content__input formRegister__block__content__input__error" :
                        "formRegister__block__content__input"}
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.errors.password && formik.touched.password &&
                <span className="formRegister__block__content__error-massage">{formik.errors.password}</span>}
                <div className={"formRegister__block__content__control"}>
                    <button className={"formRegister__block__content__button__register"} type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}

export default RegistrationForm;