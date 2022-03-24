import "./style.css";
import Logo from "../../img/logo-t.svg";
import Viagem from "../../img/viagem.svg";

export default function Header() {
  return (
    <div className="background">
      <header className="container-header">
        <nav className="nav-menu">
          <input type="checkbox" id="check1" />
          <label for="check1" class="check1">
            &#9776;
          </label>
          <img className="logo" src={Logo} alt="logo-travelline" />
          <ul className="menu">
            <li>Home</li>
            <li>Eventos</li>
            <li>Sobre</li>
            <li>Blog</li>
            <li>Contato</li>
          </ul>
        </nav>
      </header>
      <div className="max-w">
        <div className="container-viagem">
          <div className="container-txts">
            <h1>
              <span style={{ color: "var(--primary-color)" }}>
                A vida é uma jornada
              </span>
              , não um destino
            </h1>
            <p className="p-header">
              Venha começar essa jornada com a gente, seus sonhos se tornaram
              realidade
            </p>
            <button className="btn-explore">Explore Destinos</button>
          </div>
          <div className="img-responsive">
            <img className="img-viagem" src={Viagem} alt="aviao-bagagens" />
          </div>
        </div>
      </div>
    </div>
  );
}
