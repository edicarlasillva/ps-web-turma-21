import { ChangeEvent, useState } from "react";

export function App() {
  const [liked, setLiked] = useState(false);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setLiked(event.target.checked);
  }

  return (
    <>
      <label htmlFor="">Eu curti isso</label>
      <input type="checkbox" checked={liked} onChange={handleChange} />

      <p>Você {liked ? "curtiu" : "não curtiu"}</p>
    </>
  );
}
