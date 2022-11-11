import React from "react";
import {useFormik} from "formik";

const UploadFileForm = ({setFile}: { setFile: any}) => {
    const formik = useFormik({
        initialValues: {
            files: ""
        },
        onSubmit: (values: any) => {
            Array.from(values.files).map((file: any) => setFile({
                timeCreate: Math.round(Date.now() / 1000), name: file.name, file}))
        }
    })
    return (
        <form className={"addingFiles__block__content"} onChange={formik.handleSubmit}>
            <label htmlFor="file" className={"addingFiles__block__content__label"}>
                <div className={"addingFiles__block__content__label__click"}>click to upload</div>
                <span className={"addingFiles__block__content__label__text"}>Drag & drop multiple files to upload</span>
            </label>
            <input id="file" name="file" type="file" multiple={true} onChange={(event) => {
                formik.setFieldValue("files", event.currentTarget.files)
            }} className={"addingFiles__block__content__input"}/>
        </form>
    )
}

export default UploadFileForm