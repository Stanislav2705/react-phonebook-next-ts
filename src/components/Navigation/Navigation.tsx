import { useRouter } from "next/router";
import { NavLink } from "./Navigation.styled";
import { FC } from 'react';
import { useAuth } from "@/hooks/useAuth";

const Navigation: FC = () => {
  const {isLoggedIn} = useAuth();
  const { pathname } = useRouter();

    return (
      <div>
        <NavLink href='/' className={pathname === '/' ? 'active' : ''}>Home</NavLink>
        {isLoggedIn && <NavLink href='/contacts'>Contacts</NavLink>}
      </div>
    )
}

export default Navigation

