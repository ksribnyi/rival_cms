import "./CreatePage.css"
import React from "react";
import CreatePageForm from "./CreatePageForm/CreatePageForm";

const CreatePage = () => {
    return (
        <div className={"createPage__block"}>
            <CreatePageForm/>
        </div>
    )
}

export default CreatePage