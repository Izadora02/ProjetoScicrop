import Cards from "./cards/Cards";
import world from "../../img/world.svg";
import star from "../../img/star.svg";
import like from "../../img/like.svg";
import maps from "../../img/maps.svg";
import "./style.css";

export default function Body() {
  return (
    <>
      <div className="max-w">
        <div className="container-body">
          <h2 className="titulo-body">
            <span style={{ color: "var(--primary-color)" }}>Porque</span>
            Escolher a Gente
          </h2>
          <p className="p-body">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>

          <div className="cards-container">
            <Cards img={star} titulo="Hotéis escolhidos a dedo" />
            <Cards img={world} titulo="Serviço de classe mundial" />
            <Cards img={like} titulo="Garantia de melhor preço" />
          </div>
        </div>
      </div>
      <div className="back-pink">
        <div className="max-w">
          <h3 className="maps-titulo">Estamos em todo lugar</h3>
          <h2 className="maps-titulo-2">
            Obtenha serviço instantâneo de qualquer lugar
          </h2>
          <div className="maps-container">
            <img className="maps-img" src={maps} alt="mapa" />
          </div>
        </div>
      </div>
      <div className="back-gradient">
        <div className="max-w">
          <h3 className="titulo-inscrever">
            Inscreva-se para receber nosso boletim informativo
          </h3>
          <form action="">
            <input
              className="input-inscrever"
              type="text"
              placeholder="Seu email"
            />
            <button className="btn-inscrever">Inscrever-se</button>
          </form>
        </div>
      </div>
    </>
  );
}
