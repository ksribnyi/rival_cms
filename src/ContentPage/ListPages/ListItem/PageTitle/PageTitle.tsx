import React from "react";
import {useFormik} from "formik";

interface IPageTitle {
    CheckName: (name: string) => void,
    namePage: string
}

const PageTitle = ({CheckName, namePage}: IPageTitle) => {
    const formik = useFormik({
        initialValues: {
            namePage: namePage
        },
        onSubmit: (values: any) => {
        }
    })
    return (
        <form>
            <input className={"listItem__block__input"} onBlur={() => CheckName(formik.values.namePage)}
                   id="namePage"
                   name="namePage"
                   type="text"
                   autoFocus
                   onChange={formik.handleChange}
                   value={formik.values.namePage}/>
        </form>
    )
}

export default PageTitle