import "./DropdownMenu.css"
import ListPageSvgGenerator from "../../SvgGenerator/ListPageSvgGenerator";
import React, {LegacyRef} from "react";
import DropdownMenuSvgGenerator from "../../SvgGenerator/DropdownMenuSvgGenerator";

interface IDropdownMenu {
    OpenMenu: () => void,
    isOpen: boolean
    ChangeName: () => void,
    ChangeStatus?: () => void,
    DeletePage: (id: number) => void,
    container: LegacyRef<HTMLDivElement>,
    id: number
}

const DropdownMenu = ({OpenMenu, isOpen, ChangeName, ChangeStatus, DeletePage, container, id}: IDropdownMenu) => {
    const ConfirmDelete = ( ) => {
        const text = "Do you want to delete the page?"
        if(window.confirm(text)) {
            DeletePage(id)
        }
    }
    return (
        <td className={"dropDown__block"}>
            <div className="dropDown__block__content">
                <button onClick={() => OpenMenu()} className="dropDown__block__content__button"><ListPageSvgGenerator
                    id={"more_horizontal"}/>
                </button>
                {isOpen && <div ref={container} className={"dropDown__block__content__menu"}>
                    <div className={"dropDown__block__content__menu__content"}>
                        <span className={"dropDown__block__content__menu__content__text"}>Manage</span>
                        <button className={"dropDown__block__content__menu__content__button"}
                                onClick={() => ChangeName()}>
                            <DropdownMenuSvgGenerator id={"edit"}/>
                            Edit file name
                        </button>
                        {ChangeStatus &&
                        <button className={"dropDown__block__content__menu__content__button"}
                                onClick={() => ChangeStatus()}>
                            <DropdownMenuSvgGenerator id={"book_open"}/>
                            Change status
                        </button>
                        }
                        <button className={"dropDown__block__content__menu__content__button"}
                                onClick={() => ConfirmDelete()}>
                            <DropdownMenuSvgGenerator id={"trash"}/>
                            Delete page
                        </button>
                    </div>
                </div>
                }
            </div>
        </td>
    )
}

export default DropdownMenu