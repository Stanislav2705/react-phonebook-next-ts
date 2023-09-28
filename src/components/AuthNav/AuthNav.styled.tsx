import styled from '@emotion/styled';
import Link from 'next/link';

export const NavLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};
  
  &.active {
    color: ${p => p.theme.colors.primary};
  }
`;