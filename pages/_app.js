import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";

const fetcher = (...args) => fetch(...args).then((r) => r.json());

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState(false);

  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

  if (error) {
    return <h1> Error, try again, and again... </h1>;
  }

  if (isLoading) {
    return <h1> please hold the line...</h1>;
  }

  function toggleFavorite() {
    setArtPiecesInfo(!favorite);
  }

  //console.log(data);
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        pieces={data}
        onToggleFavorite={toggleFavorite}
      />
      <Layout />
    </>
  );
}
