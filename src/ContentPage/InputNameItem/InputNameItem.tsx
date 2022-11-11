import React from "react";
import {useFormik} from "formik";
import NameFileValidate from "../../utils/NameFile.shema";

interface IPageTitle {
    CheckName: (name: string) => void,
    nameItem: string
}

const InputNameItem = ({CheckName, nameItem}: IPageTitle) => {
    const formik = useFormik({
        initialValues: {
            nameItem: nameItem
        },
        validationSchema: NameFileValidate,
        onSubmit: (values) => {
            CheckName(values.nameItem)
        }
    })
    return (
        <form>
            <input className={formik.errors.nameItem && formik.touched.nameItem ?
                "listItem__block__input listItem__block__input__error" :
                "listItem__block__input"}
                   onBlur={() => {
                       formik.handleSubmit()
                   }}
                   id="namePage"
                   name="namePage"
                   type="text"
                   autoFocus
                   onChange={formik.handleChange}
                   value={formik.values.nameItem}/>
        </form>
    )
}

export default InputNameItem