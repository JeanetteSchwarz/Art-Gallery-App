import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <>
      <StyledNavbar>
        <StyledLink href="/">Spotlight</StyledLink>
        <StyledLink href="/art-pieces">Art Pieces</StyledLink>
      </StyledNavbar>
    </>
  );
}

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: grey;
  position: fixed;
  height: 50px;
  bottom: 0;
  right: 0;
  left: 0;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
