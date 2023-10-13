import { useRouter } from "next/router";
import { NavLink } from "./AuthNav.styled";
import { FC } from 'react';

const AuthNav: FC = () => {
  const { pathname } = useRouter()

    return (
      <div>
        <NavLink href='/register' className={pathname === '/register' ? 'active' : ''}>Register</NavLink>
        <NavLink href='/login' className={pathname === '/login' ? 'active' : ''}>Log In</NavLink>
      </div>
    )
}

export default AuthNav