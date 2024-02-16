export default function Image({ image, title }) {
  return <img src={image} alt={title} height={144} width={144} />;
}
