import "./CreatePageForm.css"
import React, {useState} from "react";
import {useFormik} from "formik";
import CreatePageSvgGenerator from "../../../SvgGenerator/CreatePagelSvgGenerator";
import Popup from "./Popup";

const CreatePageForm = ({setPage, countPage}: { setPage: any, countPage: number }) => {
    const [change, setChange] = useState(false)
    const [show, setShow] = useState(false)
    const formik = useFormik({
        initialValues: {
            titlePage: "",
            file: {}
        },
        onSubmit: (values: any) => {
            setPage({
                id: countPage,
                namePage: values.titlePage,
                timeCreate: Math.round(Date.now() / 1000),
                pageStatus: false,
                author: "dfgf",
                authorStatus: false,
                file: values.file
            })
            setShow(true)
            setTimeout(() => setShow(false), 2000)
        }
    })
    return (
        <>
            <form className="createPageForm__block" onSubmit={formik.handleSubmit}>
                <div className={"createPageForm__block__content"}>
                <span className={"createPageForm__block__content__title"}>
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
                        <span className={"createPageForm__block__content__control__text"}>Joe Blogs</span>
                        <span className={"createPageForm__block__content__control__status"}>Admin</span>
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
                        formik.setFieldValue("files", event.currentTarget.files[0])
                    }} className="dragDropFile__block__content__input"/>
                </div>
            </form>
            {show && <Popup/>}
        </>
    )
}

export default CreatePageForm