import * as yup from "yup";

export const loginformSchema=yup.object().shape({
    img:yup.string().required("image is required"),
    name:yup.string().required("name is required"),
    price:yup
            .number("please should be a number")
            .required("price is required")
            .positive("please should be a positive")
            .integer("please should be a integer")
})