import { Link } from "react-router-dom";
import { ContactList } from "../../components/ContactList";

export function Home() {
  return (
    <>
      <h1>Meus contatos</h1>
      <Link to="novo-contato">Cadastrar contato</Link>

      <ContactList />
    </>
  );
}
