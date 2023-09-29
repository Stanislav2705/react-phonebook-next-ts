import { NavLink } from "./AuthNav.styled";
import { FC } from 'react';

const AuthNav: FC = () => {
    return (
      <div>
        <NavLink href='/register'>Register</NavLink>
        <NavLink href='/login'>Log In</NavLink>
      </div>
    )
}

export default AuthNav