import * as Yup from "yup";

const NameFileValidate = Yup.object().shape({
    nameItem: Yup.string()
        .min(3, "Too Low")
        .max(20, "Too Long!")
        .required("Required")
});

export default NameFileValidate