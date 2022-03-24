import "./style.css";

export default function Cards({ titulo, img }) {
  return (
    <div className="card">
      <img className="imgs-icon" src={img} alt="icon" />
      <h3 className="titulo">{titulo}</h3>
      <p className="p-cards">
        Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa
      </p>
    </div>
  );
}
