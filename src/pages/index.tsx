import Box from "@/shared/Box/Box";
import { Title } from "./index.styled";

export default function Home() {
  return (
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
  )
}
