import FavButton from "@/components/Favorite-Button";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function DetailPage({ pieces }) {
  const router = useRouter();

  const artIndex = pieces.find(({ slug }) => slug === router.query.slug);
  console.log(artIndex);
  const { imageSource, name, artist, year, genre } = artIndex;

  return (
    <>
      <StyledPreview>
        <Image src={imageSource} alt={name} height={300} width={300} />
        <StyledInfoBox>
          <h2>Title: {name}</h2>
          <h3>Artist: {artist}</h3>
          <h4>{year}</h4>
          <h4>{genre}</h4>
        </StyledInfoBox>
      </StyledPreview>
      <button type="button" onClick={() => router.back()}>
        Back
      </button>
    </>
  );
}

const StyledPreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  background-color: lightgray;
  width: 300px;
`;
