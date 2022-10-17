import "./PageStatus.css"
import React from "react";

const PageStatus = ({status}: { status: boolean }) => {
    if (status) {
        return (
            <td className={"pageStatus__block"}>
                <span className={"pageStatus__block__statusNotPublished"}>
                    Not published
                </span>
            </td>
        )
    } else {
        return (
            <td>
                <span className={"pageStatus__block__statusPublished"}>
                    Published
                </span>
            </td>
        )
    }
}
export default PageStatus