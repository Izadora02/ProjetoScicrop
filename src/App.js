import "./App.css";
import Body from "./components/body/Body";
import Contato from "./components/contato/Contato";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Contato />
      <Footer />
    </div>
  );
}
