import "./FilesPage.css"
import AddingFiles from "./AddingFiles/AddingFiles";
import {connect} from "react-redux";
import {deleteFile, setFile, setNameFile} from "../../redux/FilesReducer/FilesReducer";

const FilesPage = ({list, setFile, deleteFile, setNameFile} : {list: any, setFile: any, deleteFile: any, setNameFile: any}) => {
    return (
        <div className={"filesPage__block"}>
            <AddingFiles list={list} setFile={setFile} deleteFile={deleteFile} setNameFile={setNameFile}/>
        </div>
    )
}

const stateProps = (state: any) => ({
    list : state.files.list
})

export default connect(stateProps, {setFile, deleteFile, setNameFile})(FilesPage)