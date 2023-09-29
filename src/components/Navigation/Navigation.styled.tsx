import styled from '@emotion/styled';
import Link from 'next/link';


export const NavLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: black;
    &.active {
    color: orange;
  }
`;



