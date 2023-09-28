import { NavLink } from "./AuthNav.styled";

export default function AuthNav() {
    return (
      <>
        <NavLink to='/register'>Register</NavLink>
        <NavLink to='/login'>Log In</NavLink>
      </>
    )
  }