import {useState} from "react";

const PreviewFileImage = ({file} : {file : any} ) => {
    const [preview, setPreview] = useState<string | undefined>("")
    const reader = new FileReader()
    if(file) {
        reader.readAsDataURL(file)
    }
    reader.onload = () => {
        // @ts-ignore
        setPreview(reader.result)
    }
    return (
        <img alt={"demo_image"} className={"listItemFile__block__preview"} src={preview}/>
    )
}

export default PreviewFileImage