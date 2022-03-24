import "./style.css";

export default function Contato() {
  return (
    <div className="max-w">
      <h2 className="titulo-form">
        Entre em <span style={{ color: "var(--primary-color)" }}>Contato</span>
      </h2>
      <p className="p-form">
        Duvidas , Criticas ou Sugestões ? Queremos te ouvir
      </p>
      <form className="forms-contato" action="">
        <label htmlFor="">Name</label>
        <input type="text" name="" id="" />

        <label htmlFor="">Email</label>
        <input type="email" name="" id="" />

        <label htmlFor="">Assunto</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>

        <button className="btn-form">Enviar</button>
      </form>
    </div>
  );
}
