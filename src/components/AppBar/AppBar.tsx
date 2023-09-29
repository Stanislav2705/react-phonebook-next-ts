import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import { Header } from "./AppBar.styled";
import { FC } from 'react';

const AppBar: FC = () => {
    return (
        <Header>
            <Navigation />
            <AuthNav />
        </Header>
    )
}

export default AppBar