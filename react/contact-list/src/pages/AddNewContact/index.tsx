import { Link } from "react-router-dom";
import { ContactForm } from "../../components/ContactForm";

export function AddNewContact() {
  return (
    <>
      <Link to="/">Todos os contatos</Link>
      <ContactForm />
    </>
  );
}
