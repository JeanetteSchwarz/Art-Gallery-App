import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import FavButton from "./Favorite-Button";

export default function ArtPiecePreview({ image, title, name, artist, slug }) {
  return (
    <StyledList>
      <StyledBox>
        <Link href={`/art-pieces/${slug}`}>
          <Image src={image} alt={name} height={300} width={300} />
        </Link>
        <h2>{title}</h2>
        <h3>{artist}</h3>
        <FavButton />
      </StyledBox>
    </StyledList>
  );
}

const StyledList = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
`;

const StyledBox = styled.article`
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
  padding-top: 5px;
`;
