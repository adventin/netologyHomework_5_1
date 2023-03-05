export default function CardBody({ title, text, link, buttonText }) {

  return (
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <a href={link} className="btn btn-primary">{buttonText}</a>
    </div>
  );
}
