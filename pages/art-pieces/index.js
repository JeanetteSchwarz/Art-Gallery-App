import ArtPiecePreview from "../../components/ArtPiecePreview";
import styled from "styled-components";

export default function ArtPieces({ pieces }) {
  console.log(pieces);
  return (
    <>
      <StyledHeadline>Gallery</StyledHeadline>
      {pieces.map((piece) => (
        <>
          <ArtPiecePreview
            key={piece.slug}
            image={piece.imageSource}
            artist={piece.artist}
            title={piece.name}
            slug={piece.slug}
          />
        </>
      ))}
    </>
  );
}

const StyledHeadline = styled.h1`
  text-align: center;
`;
