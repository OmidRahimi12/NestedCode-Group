import * as yup from "yup";

export const contactSchema = yup.object({
  name: yup
    .string()
    .required("Name is required"),

  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email"),

  subject: yup
    .string()
    .required("Subject is required"),

  message: yup
    .string()
    .required("Message is required"),
});