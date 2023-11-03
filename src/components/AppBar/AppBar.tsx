import { useAuth } from "@/hooks/useAuth";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import { Header } from "./AppBar.styled";
import { FC } from 'react';
import UserMenu from "../UserMenu/UserMenu";

const AppBar: FC = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Header>
            <Navigation />
            {isLoggedIn ? <UserMenu/> : <AuthNav />}
        </Header>
    )
}

export default AppBar