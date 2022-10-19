import React from "react";

interface IPageTitle {
    changeName: boolean,
    CheckName: () => void
}

const PageTitle = ({changeName, CheckName}: IPageTitle) => {
    if (changeName) {
        return (
            <td>
                <input className={"listItem__block__input"} onBlur={() => CheckName()} value={"Home_page"}/>
            </td>
        )
    } else {
        return (
            <td>
                <span className={"listItem__block__nameSite"}>Home_page</span>
            </td>
        )
    }
}

export default PageTitle