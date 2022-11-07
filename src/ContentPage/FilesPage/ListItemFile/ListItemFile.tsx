import "./ListItemFile.css"
import React, {useEffect, useRef, useState} from "react";
import DropdownMenu from "../../DropdownMenu/DropdownMenu";
import InputNameItem from "../../InputNameItem/InputNameItem";
import PreviewFileImage from "./PreviewFileImage/PreviewFileImage";
import PageCreationTime from "../../ListPages/ListItem/PageСreationTime/PageCreationTime";

const ListItemFile = ({
                          file,
                          deleteFile,
                          setNameFile
                      }: {file: any, deleteFile: any, setNameFile: any }) => {
    const container = useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = useState(false)
    const [fileName, setFileName] = useState(false)

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
        setFileName(true)
    }

    const CheckName = (name: string) => {
        setNameFile(file.id, name)
        setFileName(false)
    }

    const DeletePage = () => {
        deleteFile(file.id)
        setIsOpen(false)
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])
    return (
        <tr className={"listItemFile__block"}>
            <td>
                <PreviewFileImage file={file.file}/>
            </td>
            <td>
                {fileName ? <InputNameItem CheckName={CheckName} namePage={file.name}/> :
                    <span className={"listItemFile__block__content__text"}>{file.name}</span>
                }
            </td>
            <td>
                <PageCreationTime timeCreate={file.timeCreate}/>
            </td>
            <DropdownMenu ChangeName={ChangeName} DeletePage={DeletePage} OpenMenu={OpenMenu} container={container}
                          isOpen={isOpen} id={file.id}/>
        </tr>
    )
}

export default ListItemFile