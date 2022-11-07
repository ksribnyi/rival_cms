import React from "react";

const UploadFileForm = ({setFile}: { setFile: any}) => {
    return (
        <form className={"addingFiles__block__content"}>
            <label htmlFor="file" className={"addingFiles__block__content__label"}>
                <div className={"addingFiles__block__content__label__click"}>click to upload</div>
                <span className={"addingFiles__block__content__label__text"}>Drag & drop multiple files to upload</span>
            </label>
            <input id="file" name="file" type="file" multiple={true} onChange={(event) => {
                event.target.files && Array.from(event.target.files).map(file => setFile({
                    timeCreate: Math.round(Date.now() / 1000), name: file.name, file}))
            }} className={"addingFiles__block__content__input"}/>
        </form>
    )
}

export default UploadFileForm