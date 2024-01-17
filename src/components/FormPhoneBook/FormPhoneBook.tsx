import { Formik,Form } from "formik"
import { Block, Button, Container, Input, LabelForm, Text } from "./FormPhoneBook.styled";
import ErrorForm from "../ErrorForm/ErrorForm";
import * as yup from 'yup';

interface FormPhoneBookValues {
    name: string;
    number: string;
}

const initialState = {
    name: '',
    number: '',
}

const validation = yup.object().shape({
    name: yup.string().matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, 'Name may contain only letters, apostrophe, dash and spaces.').required('Please fill in the name'),
    number: yup.string().matches(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/, 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +').required('Please fill in the number'),
});

const FormPhoneBook: React.FC<FormPhoneBookValues> = () => {
    const handleSubmit = () => {
        console.log('name,number')
    }
    return (
        <Formik
        initialValues={initialState}
        validationSchema={validation}
        onSubmit={handleSubmit}
        >
        <Form autoComplete="off">
        <Container>
          <Block>
            <LabelForm><Text>Name</Text>
              <Input
                name="name"
                type="text"
              />
            </LabelForm>
            <ErrorForm name='name'/>
          </Block>
          <Block>
            <LabelForm>
              <Text>Number</Text>
              <Input
                type="tel"
                name="number"
              />
            </LabelForm>
            <ErrorForm name='number'/>
          </Block>
        </Container>
        <Button type="submit">Add contact</Button>
        </Form>
        </Formik>
    )
}

export default FormPhoneBook;