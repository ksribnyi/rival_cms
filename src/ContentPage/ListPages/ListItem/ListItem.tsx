import "./ListItem.css"
import React, {useEffect, useRef, useState} from "react";
import DropdownMenu from "./DropdownMenu/DropdownMenu";
import PageStatus from "./PageStatus/PageStatus";
import PageTitle from "./PageTitle/PageTitle";

const ListItem = () => {
    const container = useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = useState(false)
    const [changeName, setChangeName] = useState(false)
    const [status, setStatus] = useState(true)

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

    const CheckName = () => {
        setChangeName(false)
    }

    const ChangeStatus = () => {
        setIsOpen(false)
        setStatus(!status)
    }

    const DeletePage = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <tr className={"listItem__block"}>
            <PageTitle changeName={changeName} CheckName={CheckName}/>
            <td>
                <span className={"listItem__block__time"}>Updated 3 weeks ago</span>
            </td>
            <PageStatus status={status}/>
            <td>
                <span className={"listItem__block__nameUser"}>Joe Blogs</span>
                <span className={"listItem__block__userStatus"}>Admin</span>
            </td>
            <DropdownMenu OpenMenu={OpenMenu} isOpen={isOpen} ChangeName={ChangeName} ChangeStatus={ChangeStatus}
                          DeletePage={DeletePage} container={container}/>
        </tr>
    )
}

export default ListItem