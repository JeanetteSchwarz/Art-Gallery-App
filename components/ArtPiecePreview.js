import Image from "./Image";
import styled from "styled-components";

export default function ArtPiecePreview({ image, title, artist }) {
  const StyledArticle = styled.article`
    color: blue;
  `;

  return (
    <>
      <StyledArticle>
        <Image image={image} />
        <h3>{title}</h3>
        <h3>{artist}</h3>
      </StyledArticle>
    </>
  );
}
