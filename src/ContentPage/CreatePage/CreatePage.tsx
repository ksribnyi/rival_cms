import "./CreatePage.css"
import React, {useEffect} from "react";
import CreatePageForm from "./CreatePageForm/CreatePageForm";
import {connect} from "react-redux";
import {setPage} from "../../redux/PagesReducer/PagesReducer";

const CreatePage = ({
                        setPage,
                        countPage,
                        userName,
                        admin
                    }: { setPage: any, countPage: number, userName: string, admin: boolean }) => {
    useEffect(() => {
    }, [countPage])
    return (
        <div className={"createPage__block"}>
            <CreatePageForm setPage={setPage} countPage={countPage} userName={userName} admin={admin}/>
        </div>
    )
}

const stateProps = (state: any) => ({
    countPage: state.pages.list.count,
    userName: state.auth.activeUser[0].userName,
    admin: state.auth.activeUser[0].admin
})

export default connect(stateProps, {setPage})(CreatePage)