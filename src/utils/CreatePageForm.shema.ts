import * as Yup from "yup";
import {REG_TYPE_PAGE} from "./RegularExpressions";

const CreatePageValidate = Yup.object().shape({
    titlePage: Yup.string()
        .min(3, "Too Low")
        .max(20, "Too Long!")
        .required("Required"),
    file: Yup.mixed().required("Required"),
    type: Yup.string().matches(REG_TYPE_PAGE, "Only html files")
});

export default CreatePageValidate