import "./ListItemFile.css"
import React, {useEffect, useRef, useState} from "react";
import DropdownMenu from "../../DropdownMenu/DropdownMenu";
import {useFormik} from "formik";

const img_test = require("../../../assets/image/img_test.jpg")

const ListItemFile = () => {
    const container = useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = useState(false)
    const [fileName, setFileName] = useState(false)

    const handleClickOutside = (e: MouseEvent) => {
        if (container?.current && !container?.current?.contains(e.target as Node)) {
            setIsOpen(false)
        }
    }
    const OpenMenu = () => {
        setIsOpen(true)
    }

    const ChangeName = () => {
        setIsOpen(false)
        setFileName(true)
    }

    const CheckName = () => {
        setFileName(false)
    }

    const DeletePage = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const formik = useFormik({
        initialValues: {
            fileName: ""
        },
        onSubmit: (values: any) => {
            console.log(values.files)
        }
    })

    return (
        <tr className={"listItemFile__block"}>
            <td>
                <img alt={"demo_image"} className={"listItemFile__block__preview"} src={img_test}/>
            </td>
            <td>
                <form  className={"listItemFile__block__content"} onSubmit={formik.handleSubmit}>
                    {fileName ?
                        <input className={"listItemFile__block__content__input"}
                               id="fileName"
                               name="fileName"
                               type="fileName"
                               autoFocus
                               onBlur={() => CheckName()}
                               onChange={formik.handleChange}
                               value={formik.values.fileName}/> :
                        <span className={"listItemFile__block__content__text"}>{formik.values.fileName}</span>
                    }
                </form>
            </td>
            <td>
                <span className={"listItem__block__nameUser"}>Upload 2 day ago</span>
            </td>
            <td>
                <DropdownMenu ChangeName={ChangeName} DeletePage={DeletePage} OpenMenu={OpenMenu} container={container}
                              isOpen={isOpen}/>
            </td>

        </tr>
    )
}

export default ListItemFile