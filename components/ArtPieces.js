import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieces(pieces) {
  return (
    <>
      <ul>
        {pieces.map((piece) => (
          <ArtPiecePreview
            key={piece.slug}
            image={piece.imageSource}
            artist={piece.artist}
            title={piece.name}
          />
        ))}
      </ul>
    </>
  );
}
