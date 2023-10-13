import { useRouter } from "next/router";
import { NavLink } from "./Navigation.styled";
import { FC } from 'react';

const Navigation: FC = () => {
  const { pathname } = useRouter();

    return (
      <div>
        <NavLink href='/' className={pathname === '/' ? 'active' : ''}>Home</NavLink>
      </div>
    )
}

export default Navigation

