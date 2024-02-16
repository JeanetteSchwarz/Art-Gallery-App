import ArtPiecePreview from "./ArtPiecePreview";
import styled from "styled-components";

export default function ArtPieces({ pieces }) {
  const StyledList = styled.ul`
    list-style-type: none;
  `;

  return (
    <>
      <StyledList>
        {pieces.map((piece) => (
          <ArtPiecePreview
            key={piece.slug}
            image={piece.imageSource}
            artist={piece.artist}
            title={piece.name}
          />
        ))}
      </StyledList>
    </>
  );
}
