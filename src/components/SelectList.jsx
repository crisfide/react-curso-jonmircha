import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import Message from "./Message";

const SelectList = ({ title, url, handleChange }) => {
  const { data, error, isPending } = useFetch(url);

  if (!data) return null;

  if (error) {
    return <Message />;
  }

  const label = title.charAt(0).toUpperCase() + title.slice(1);
  let lista = data[title + "s"] ? data[title + "s"] : data[title + "es"];

  //lista.sort((a, b) => a.nombre.localeCompare(b.nombre));
  lista.sort((a, b) => {
    const regex = /\d+/;
    const numA = a.nombre.match(regex);
    const numB = b.nombre.match(regex);

    if (numA && numB) {
      // Ambos tienen números, ordenar numéricamente
      return parseInt(numA[0]) - parseInt(numB[0]);
    } else if (!numA && !numB) {
      // Ambos son solo letras, ordenar alfabéticamente
      return a.nombre.localeCompare(b.nombre);
    } else {
      // Uno tiene número y el otro no, el que no tiene número va primero
      return numA ? 1 : -1;
    }
  });

  return (
    <div>
      <label htmlFor={title}>{label}:  </label>
      {isPending && <Loader />}
      <select name={title} id={title} onChange={handleChange}>
        <option value="">Elija {title}</option>

        {lista &&
          lista.map((p) => (
            <option key={p.id} value={p.id}>
              {p.nombre}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectList;
