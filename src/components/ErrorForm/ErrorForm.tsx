import { ErrorMessage } from "formik";
import { ErrorText } from "./ErrorForm.styled";

interface ErrorFormProps {
    name: string;
}

const ErrorForm: React.FC<ErrorFormProps> = ({name}) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <div><ErrorText>{message}</ErrorText></div>}
    />
  )
}

export default ErrorForm;