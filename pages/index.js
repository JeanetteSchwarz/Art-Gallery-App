import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  console.log(data);

  if (isLoading) {
    return <h2>Please hold the line...</h2>;
  }

  if (error) {
    return <h2>Ooops, something went wrong... </h2>;
  }

  return (
    <>
      <h1>Art Gallery</h1>
      <ArtPieces pieces={data} />;
    </>
  );
}
