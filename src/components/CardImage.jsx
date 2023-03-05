export default function CardImage({ srcImage, title }) {

  return (
    { srcImage } ? <img src={srcImage} className="card-img-top" alt={title} /> : <></>
  );
}