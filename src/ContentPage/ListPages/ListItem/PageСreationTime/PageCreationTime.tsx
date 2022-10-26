import React from "react";
import CreateTime from "./CreateTime";

const PageCreationTime = ({timeCreate}: { timeCreate: number }) => {
    return (
        <span className={"listItem__block__time"}>Updated {CreateTime(timeCreate)} ago</span>
    )
}

export default PageCreationTime