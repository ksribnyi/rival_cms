import "./ListItem.css"
import React, {useEffect, useRef, useState} from "react";
import DropdownMenu from "../../DropdownMenu/DropdownMenu";
import PageStatus from "./PageStatus/PageStatus";
import PageCreationTime from "./PageСreationTime/PageCreationTime";
import InputNameItem from "../../InputNameItem/InputNameItem";


const ListItem = ({
                      deletePage,
                      setStatus,
                      setNamePage,
                      pageStatus,
                      id,
                      namePage,
                      author,
                      timeCreate,
                      authorStatus
                  }: { deletePage: any, setStatus: any, setNamePage: any, pageStatus: boolean, id: number, namePage: string, author: string, timeCreate: number, authorStatus: boolean }) => {
    const container = useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = useState(false)
    const [changeName, setChangeName] = useState(false)

    const handleClickOutside = (e: MouseEvent) => {
        if (container?.current && !container?.current?.contains(e.target as Node)) {
            setIsOpen(false)
        }
    }
    const OpenMenu = () => {
        setIsOpen(true)
    }

    const ChangeName = () => {
        setIsOpen(false)
        setChangeName(true)
    }

    const CheckName = (name: string) => {
        setNamePage(id, name)
        setChangeName(false)
    }

    const ChangeStatus = () => {
        setIsOpen(false)
        setStatus(id, !pageStatus)
    }

    const DeletePage = (id: number,) => {
        deletePage(id)
        setIsOpen(false)
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])
    return (
        <tr className={"listItem__block"}>
            <td>
                {changeName ? <InputNameItem CheckName={CheckName} namePage={namePage}/> :
                    <span className={"listItem__block__nameSite"}>{namePage}</span>}
            </td>
            <td>
                <PageCreationTime timeCreate={timeCreate}/>
            </td>
            <PageStatus status={pageStatus}/>
            <td>
                <span className={"listItem__block__nameUser"}>{author}</span>
                {authorStatus && <span className={"listItem__block__userStatus"}>Admin</span>}
            </td>
            <DropdownMenu OpenMenu={OpenMenu} isOpen={isOpen} ChangeName={ChangeName} ChangeStatus={ChangeStatus}
                          DeletePage={DeletePage} container={container} id={id}/>
        </tr>
    )
}

export default ListItem