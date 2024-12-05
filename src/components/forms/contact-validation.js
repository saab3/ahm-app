import { object, string } from "yup";

export const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export const validationSchema = object().shape({
  email: string().email("بريد غير صحيح").required("البريد مطلوب"),
  name: string().required("الإسم مطلوب"),
  subject: string().required("العنوان مطلوب"),
  message: string().required("الرسالة مطلوبة"),
});
