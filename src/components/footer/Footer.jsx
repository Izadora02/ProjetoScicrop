import Logo from "../../img/logo-t.svg";
import "./style.css";

export default function Footer() {
  return (
    <>
      <div className="back-pink-footer">
        <footer className="max-w p-0">
          <div className="footer">
            <img className="logo-foot" src={Logo} alt="logo-travelline" />
            <div className="redes">
              <div className="endereco">
                <p>Nosso escritorio: </p>
                <p>5678 Seltice Way Coeur </p>
                <p>info@yoursite.com </p>
              </div>

              <div>
                <ul className="redes-sociais">
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>Twitter</li>
                  <li>Youtube</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="back-black">
        <p className="max-w p-0">&copy; Izadora 2022</p>
      </div>
    </>
  );
}
