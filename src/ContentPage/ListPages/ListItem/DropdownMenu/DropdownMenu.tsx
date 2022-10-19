import "./DropdownMenu.css"
import ListPageSvgGenerator from "../../../../SvgGenerator/ListPageSvgGenerator";
import React, {LegacyRef} from "react";
import DropdownMenuSvgGenerator from "../../../../SvgGenerator/DropdownMenuSvgGenerator";

interface IDropdownMenu {
    OpenMenu: () => void,
    isOpen: boolean
    ChangeName: () => void,
    ChangeStatus: () => void,
    DeletePage: () => void,
    container: LegacyRef<HTMLDivElement>
}

const DropdownMenu = ({OpenMenu, isOpen, ChangeName, ChangeStatus, DeletePage, container}: IDropdownMenu) => {
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
                        <button className={"dropDown__block__content__menu__content__button"}
                                onClick={() => ChangeStatus()}>
                            <DropdownMenuSvgGenerator id={"book_open"}/>
                            Change status
                        </button>
                        <button className={"dropDown__block__content__menu__content__button"}
                                onClick={() => DeletePage()}>
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