import "./Popup.css"

const Popup = ({text}: {text: string}) => {
    return (
        <div className={"popup__block"}>
            <span>
                {text}
            </span>
        </div>
    )
}

export default Popup