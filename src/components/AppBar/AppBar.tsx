import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import { Header } from "./AppBar.styled";

export default function AppBar() {
    return (
        <Header>
            <Navigation />
            <AuthNav />
        </Header>
    )
}