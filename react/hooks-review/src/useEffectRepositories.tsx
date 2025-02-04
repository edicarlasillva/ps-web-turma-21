import { useEffect, useState } from "react";
import axios from "axios";

interface IRepository {
  id: number;
  name: string;
}

export function App() {
  const [repositories, setRepositories] = useState<IRepository[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchRepositories() {
      setError("");
      setRepositories([]);
      setLoading(true);

      try {
        const response = await axios.get(
          "https://api.github.com/users/edicarlasillva/repos"
        );

        setRepositories(response.data);
      } catch (error) {
        setError("Falha ao carregar repositórios");
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchRepositories();
  }, []);

  return (
    <>
      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {repositories.map((repository) => (
        <p key={repository.id}>{repository.name}</p>
      ))}
    </>
  );
}
