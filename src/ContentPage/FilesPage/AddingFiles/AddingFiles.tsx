import "./AddingFiles.css"
import React, {useState} from "react";
import {useFormik} from "formik";
import CreatePageSvgGenerator from "../../../SvgGenerator/FilesPageSvgGenerator";
import ListItemFile from "../ListItemFile/ListItemFile";

const AddingFiles = () => {
    const [active, setActive] = useState([false, false, false, false])
    const formik = useFormik({
        initialValues: {
            search: "",
            files: []
        },
        onSubmit: (values: any) => {
            console.log(values.files)
        }
    })
    return (
        <>
            <form className={"addingFiles__block"} onSubmit={formik.handleSubmit}>
                <div className={"addingFiles__block__content"}>
                    <label htmlFor="file" className={"addingFiles__block__content__label"}>
                        <div className={"addingFiles__block__content__label__click"}>click to upload</div>
                        <span className={"addingFiles__block__content__label__text"}>Drag & drop multiple files to upload</span>
                    </label>
                    <input id="file" name="file" type="file" multiple={true} onChange={(event) => {
                        // @ts-ignore
                        formik.setFieldValue("files", event.currentTarget.files)
                        console.log(event.currentTarget.files)
                    }} className={"addingFiles__block__content__input"}/>
                </div>
                <div className={"addingFiles__block__content__control"}>
                    <div className={"addingFiles__block__content__control__search"}>
                        <button type={"button"} className={"addingFiles__block__content__control__search__button"}>
                            <CreatePageSvgGenerator id={"search"}/></button>
                        <input
                            className={"addingFiles__block__content__control__search__input"}
                            id="search"
                            name="search"
                            type="search"
                            placeholder="Search for file"
                            onChange={formik.handleChange}
                            value={formik.values.search}
                        />
                    </div>
                    <div className={"addingFiles__block__content__control__sortBar"}>
                        <span className={"addingFiles__block__content__control__sortBar__text"}>Filter</span>
                        <button type={"button"}
                                onClick={() => setActive([true, false, false, false])}
                                className={active[0] ?
                                    "addingFiles__block__content__control__sortBar__button__active" :
                                    "addingFiles__block__content__control__sortBar__button"
                                }>Images
                        </button>
                        <button type={"button"}
                                onClick={() => setActive([false, true, false, false])}
                                className={active[1] ?
                                    "addingFiles__block__content__control__sortBar__button__active" :
                                    "addingFiles__block__content__control__sortBar__button"
                                }>Files
                        </button>
                        <button type={"button"}
                                onClick={() => setActive([false, false, true, false])}
                                className={active[2] ?
                                    "addingFiles__block__content__control__sortBar__button__active" :
                                    "addingFiles__block__content__control__sortBar__button"
                                }>Audio
                        </button>
                        <button type={"button"}
                                onClick={() => setActive([false, false, false, true])}
                                className={active[3] ?
                                    "addingFiles__block__content__control__sortBar__button__active" :
                                    "addingFiles__block__content__control__sortBar__button"
                                }>Video
                        </button>
                    </div>
                </div>
                <table className={"addingFiles__block__table"}>
                    <tbody>
                    {/*<ListItemFile/>*/}
                    </tbody>
                </table>
                <span className={"addingFiles__block__paginator"}>
                    <div className={"addingFiles__block__paginator__item__active"}>1</div>
                    <div className={"addingFiles__block__paginator__item"}>2</div>
                    <div className={"addingFiles__block__paginator__item"}>3</div>
                </span>
            </form>
        </>
    )
}

export default AddingFiles