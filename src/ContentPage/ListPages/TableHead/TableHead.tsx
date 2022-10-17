import "./TableHead.css"
import ListPageSvgGenerator from "../../../SvgGenerator/ListPageSvgGenerator";
import {useNavigate} from "react-router-dom";

const TableHead = () => {
    const navigate = useNavigate()
    return (
        <tr className={"tableHead__block"}>
            <th>
                <button className={"tableHead__block__button"}>Page title</button>
            </th>
            <th>
                <button className={"tableHead__block__button"}>Created</button>
            </th>
            <th>
                <button className={"tableHead__block__button"}>Status</button>
            </th>
            <th>
                <button className={"tableHead__block__button"}>Author</button>
            </th>
            <th>
                <button className={"tableHead__block__button__addNew"} onClick={() => {
                    navigate("/content/create_page")
                }}>
                    <ListPageSvgGenerator id={"file_plus"}/>
                    <span>Add new</span>
                </button>
            </th>
        </tr>

    )
}

export default TableHead