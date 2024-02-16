import Image from "./Image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <article>
        <Image image={image} />
        title={title}, artist={artist}
      </article>
    </>
  );
}
