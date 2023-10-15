import Box from "@/shared/Box/Box";
import { Title } from "./Home.styled";
import Layout from "../Layout/layout";
import { FC } from 'react';

const Home: FC = () => {
    return (
      <>
        <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        minHeight='calc(100vh - 50px)'
        >
            <Title>
            CREATE YOUR OWN PHONEBOOK
            </Title>
        </Box>
      </>
    )
  }

  export default Home