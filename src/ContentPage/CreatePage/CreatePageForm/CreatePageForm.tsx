import "./CreatePageForm.css"
import React, {useState} from "react";
import {useFormik} from "formik";
import CreatePageSvgGenerator from "../../../SvgGenerator/CreatePagelSvgGenerator";
import Popup from "./Popup";
import CreatePageValidate from "../../../utils/CreatePageForm.shema";

const CreatePageForm = ({
                            setPage,
                            countPage,
                            userName,
                            admin
                        }: { setPage: any, countPage: number, userName: string, admin: boolean }) => {
    const [change, setChange] = useState(false)
    const [show, setShow] = useState(false)
    const formik = useFormik({
        initialValues: {
            titlePage: "",
            file: "",
            type: ""
        },
        validationSchema: CreatePageValidate,
        onSubmit: (values: any) => {
            setPage({
                id: countPage,
                namePage: values.titlePage,
                timeCreate: Math.round(Date.now() / 1000),
                pageStatus: false,
                author: userName,
                authorStatus: admin,
                file: values.file
            })
        },
    })
    return (
        <>
            <form className="createPageForm__block" onSubmit={formik.handleSubmit}>
                <div className={"createPageForm__block__content"}>
                <span className={formik.errors.titlePage && formik.touched.titlePage ?
                    "createPageForm__block__content__title createPageForm__block__content__title__error" :
                    "createPageForm__block__content__title"}>
                    <button type={"button"} className={"createPageForm__block__content__title__button"} onClick={() => {
                        setChange(!change)
                    }}><CreatePageSvgGenerator id={"edit"}/></button>
                    {change ?
                        <input className={"createPageForm__block__content__title__input"}
                               id="titlePage"
                               name="titlePage"
                               type="text"
                               autoFocus
                               onBlur={() => setChange(true)}
                               onChange={formik.handleChange}
                               value={formik.values.titlePage}/> :
                        <p className={"createPageForm__block__content__title__text"}>{formik.values.titlePage}</p>
                    }
                </span>
                    <div className={"createPageForm__block__content__control"}>
                        <span className={"createPageForm__block__content__control__text"}>{userName}</span>
                        {admin && <span className={"createPageForm__block__content__control__status"}>Admin</span>}
                        <button type={"submit"} className={"createPageForm__block__content__control__button"}>
                            <CreatePageSvgGenerator
                                id={"eye"}/>Add page
                        </button>
                    </div>
                </div>
                <div className="createPageForm__block__content__uploadFile">
                    <label htmlFor="file" className={"createPageForm__block__content__uploadFile__label"}>
                        <CreatePageSvgGenerator id={"plus_circle"}/>
                        Add new section
                    </label>
                    <input id="file" name="file" type="file" onChange={(event) => {
                        // @ts-ignore
                        formik.setFieldValue("file", event.currentTarget.files[0])
                        // @ts-ignore
                        formik.setFieldValue("type", event.currentTarget.files[0].name)
                        setShow(true)
                        setTimeout(() => setShow(false), 2000)
                    }} className="dragDropFile__block__content__input"/>
                </div>
            </form>
            {formik.errors.type && formik.touched.type &&
            <span className={"createPageForm__error-massage"}>{formik.errors.type}</span>}
            {formik.errors.file && formik.touched.file &&
            <span className={"createPageForm__error-massage"}>{formik.errors.file}</span>}
            {show && <Popup text={"File add"}/>}
        </>
    )
}

export default CreatePageForm