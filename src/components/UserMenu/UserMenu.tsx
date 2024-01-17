import { useDispatch } from "react-redux"
import { Box, UserName } from "@/components/UserMenu/UserMenu.styled";
import { logOut } from "@/redux/auth/operation";
import { Button } from "@/shared/Button/Button.styled";
import { useAuth } from "@/hooks/useAuth";
import { AppDispatch } from "@/redux/store";
import User from "@/shared/UserTypes/User";
import { useRouter } from 'next/router';
import { useAppDispatch } from "@/redux/hook";

export default function UserMenu() {
  const dispatch = useAppDispatch();
  const { user } = useAuth() as { user: User };
  const router = useRouter();

  const handleLogOut = () => {
    dispatch(logOut())
    router.push('/login');
  } 

  return (
    <Box>
      <UserName>Welcome, {user.name}</UserName>
      <Button type="button" onClick={handleLogOut}>Logout</Button>
    </Box>
  )
}