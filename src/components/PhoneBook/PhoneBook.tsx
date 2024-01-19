import PrivateRoute from "@/routes/PrivateRoute/PrivateRoute";
import { Box } from "./PhoneBook.styled"
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import BlockPhone from "../BlockPhone/BlockPhone";
import { Error } from "@/shared/Error/Error.styled";
import Loader from "@/shared/Loader/Loader";
import FormPhoneBook from "../FormPhoneBook/FormPhoneBook";
import { selectIsLoading } from "@/redux/selectors";
import Filter from "../Filter/Filter";

const PhoneBook: React.FC<{}> = () => {
    const dispatch = useAppDispatch();

    // const contacts = useAppSelector()
    const isLoading = useAppSelector(selectIsLoading)

    return (
        <Box>
            <BlockPhone title='Phonebook'>
            <FormPhoneBook name={""} number={""} />
            </BlockPhone>
            <BlockPhone title="Contacts">
            <Filter />
            {isLoading && <Loader />}
            {/* {error && <Error>Something goes wrong. {error}.</Error>}
            {contacts.length > 0 && <PhoneBookList />}
            {(filter !== "" && contacts.length === 0) && <Message>This name was not found</Message>} */}
            </BlockPhone>
        </Box>
    )

}

export default PhoneBook;