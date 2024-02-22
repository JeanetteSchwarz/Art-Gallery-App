export default function FavButton(isFavorite, onToggleFavorite, slug) {
  return (
    <>
      <button
        type="button"
        onClick={() => {
          onToggleFavorite(slug);
        }}
        $isFavorite={isFavorite}
      >
        Liebs
      </button>
    </>
  );
}
