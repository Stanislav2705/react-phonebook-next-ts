import { Field, Form } from "formik";
import styled from "@emotion/styled";
import { Button } from "../Button/Button.styled";


export const FormStyled = styled(Form)`
  width: 320px;
  margin: 0 auto;
`
export const StyledButton = styled(Button)`
   width: 100%;
   margin-top: 8px;
`

export const Input = styled(Field)`
  width: 100%;
  font-size: 16px;
  padding: 2px 4px;
  margin-top: 6px;
  outline: none;
  border: 1px solid #ffa500;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Label = styled.label`
  display: block;
  text-align: left;
  font-weight: 500;
  margin-top: 8px;
  color: #2a2a2a;
`