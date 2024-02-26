import styled from "styled-components";

export default function FavButton(isFavorite, onToggleFavorite, slug) {
  return (
    <>
      <StyledFavButton type="button" onClick={onToggleFavorite}>
        Liebs
      </StyledFavButton>
    </>
  );
}
const StyledFavButton = styled.button`
  &:active {
    background-color: blue;
  }
`;

{
  /* <button type="button" onClick={toggleLiked}>
  {liked ? "Remove like" : "Add like"} */
}

//isFavorite={isFavorite}
