import "./ListPages.css"
import TableHead from "./TableHead/TableHead";
import {connect} from "react-redux";
import {deletePage, setNamePage, setStatus} from "../../redux/PagesReducer/PagesReducer";
import ListItem from "./ListItem/ListItem";

const ListPages = ({
                       list,
                       deletePage,
                       setStatus,
                       setNamePage
                   }: { list: any, deletePage: any, setStatus: any, setNamePage: any }) => {
    return (
        <div className={"listPages__block"}>
            <table className={"listPages__block__content"}>
                <thead className={"listPages__block__content__thead"}>
                <TableHead/>
                </thead>
                <tbody className={"listPages__block__content__tbody"}>
                {list.pages.map((row: any) => <ListItem key={row.id} deletePage={deletePage} setStatus={setStatus}
                                                        setNamePage={setNamePage}
                                                        pageStatus={row.pageStatus} id={row.id} namePage={row.namePage}
                                                        author={row.author} timeCreate={row.timeCreate}
                                                        authorStatus={row.authorStatus}/>)}
                </tbody>
            </table>
            <span className={"listPages__block__paginator"}>
                <div className={"listPages__block__paginator__item__active"}>1</div>
                <div className={"listPages__block__paginator__item"}>2</div>
                <div className={"listPages__block__paginator__item"}>3</div>
            </span>
        </div>

    )
}
const stateProps = (state: any) => ({
    list: state.pages.list
})


export default connect(stateProps, {deletePage, setStatus, setNamePage})(ListPages)