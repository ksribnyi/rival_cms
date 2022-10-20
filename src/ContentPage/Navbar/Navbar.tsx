import "./Navber.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={"navbar__block"}>
            <nav className={"navbar__block__content"}>
                <span className={"navbar__block__content__text"}>Manage</span>
                <NavLink className={"navbar__block__content__link"} to={"/content/list_pages"}>View site</NavLink>
                <NavLink className={"navbar__block__content__link"} to={"/content/create_page"}>Create page</NavLink>
                <NavLink className={"navbar__block__content__link"} to={""}>Blog articles</NavLink>
                <NavLink className={"navbar__block__content__link"} to={"/content/files_page"}>Files</NavLink>
                <NavLink className={"navbar__block__content__link"} to={""}>Users</NavLink>
                <NavLink className={"navbar__block__content__link"} to={""}>Subscriptions</NavLink>
                <NavLink className={"navbar__block__content__link"} to={""}>Archived pages</NavLink>
                <span className={"navbar__block__content__text"}>Pro futures</span>
                <NavLink className={"navbar__block__content__link"} to={""}>Themes</NavLink>
                <NavLink className={"navbar__block__content__link"} to={""}>Plugins</NavLink>
                <NavLink className={"navbar__block__content__link"} to={""}>Upgrade plans</NavLink>
            </nav>
        </div>
    )
}

export default Navbar