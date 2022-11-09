import "./ListPages.css"
import TableHead from "./TableHead/TableHead";
import {connect} from "react-redux";
import {deletePage, setNamePage, setStatus} from "../../redux/PagesReducer/PagesReducer";
import ListItem from "./ListItem/ListItem";
import usePagination from "../../hooks/usePagination";
import Pagination from "../Pagination/Pagination";
import React from "react";

const ListPages = ({
                       list,
                       deletePage,
                       setStatus,
                       setNamePage
                   }: { list: any, deletePage: any, setStatus: any, setNamePage: any }) => {
    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        gaps,
        setPage,
        totalPages,
    } = usePagination({
        contentPerPage: 5,
        count: list.pages.length,
    })
    return (

        <div className={"listPages__block"}>
            <table className={"listPages__block__content"}>
                <thead className={"listPages__block__content__thead"}>
                <TableHead/>
                </thead>
                <tbody className={"listPages__block__content__tbody"}>
                {list.pages.slice(firstContentIndex, lastContentIndex).map((row: any) => <ListItem key={row.id}
                                                                                                   deletePage={deletePage}
                                                                                                   setStatus={setStatus}
                                                                                                   setNamePage={setNamePage}
                                                                                                   pageStatus={row.pageStatus}
                                                                                                   id={row.id}
                                                                                                   namePage={row.namePage}
                                                                                                   author={row.author}
                                                                                                   timeCreate={row.timeCreate}
                                                                                                   authorStatus={row.authorStatus}/>)}
                </tbody>
            </table>
            {1 < totalPages &&
            <Pagination gaps={gaps} nextPage={nextPage} page={page} prevPage={prevPage} setPage={setPage}
                        totalPages={totalPages}/>}
        </div>
    )
}
const stateProps = (state: any) => ({
    list: state.pages.list
})


export default connect(stateProps, {deletePage, setStatus, setNamePage})(ListPages)