import "./ListPages.css"
import TableHead from "./TableHead/TableHead";
import ListItem from "./ListItem/ListItem";

const ListPages = () => {
    return (
        <div className={"listPages__block"}>
            <table className={"listPages__block__content"}>
                <thead className={"listPages__block__content__thead"}>
                <TableHead/>
                </thead>
                <tbody className={"listPages__block__content__tbody"}>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
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


export default ListPages