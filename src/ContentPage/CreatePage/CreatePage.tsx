import "./CreatePage.css"
import React, {useEffect} from "react";
import CreatePageForm from "./CreatePageForm/CreatePageForm";
import {connect} from "react-redux";
import {setPage} from "../../redux/PagesReducer/PagesReducer";

const CreatePage = ({setPage, countPage}: { setPage: any, countPage: number }) => {
    useEffect(() => {}, [countPage])
    return (
        <div className={"createPage__block"}>
            <CreatePageForm setPage={setPage} countPage={countPage}/>
        </div>
    )
}

const stateProps = (state:any) => ({
    countPage: state.pages.list.count
})

export default connect(stateProps, {setPage})(CreatePage)