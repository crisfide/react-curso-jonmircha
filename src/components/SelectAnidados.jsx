import SelectList from "./SelectList";
import React, { useState } from "react";

const SelectAnidados = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");

  return (
    <div style={{ textAlign: "left" }}>
      <SelectList
        title="provincia"
        url="https://apis.datos.gob.ar/georef/api/provincias?campos=nombre"
        handleChange={(e) => setState(e.target.value)}
      />
      {state && (
        <SelectList
          title="municipio"
          url={`https://apis.datos.gob.ar/georef/api/municipios?provincia=${state}&campos=nombre&max=255`}
          handleChange={(e) => setTown(e.target.value)}
        />
      )}
      {town && (
        <SelectList
          title="localidad"
          url={`https://apis.datos.gob.ar/georef/api/localidades?provincia=${state}&campos=nombre&municipio=${town}`}
          handleChange={(e) => setSuburb(e.target.value)}
        />
      )}
      <pre>
        <code>
          {state} {town} {suburb}
        </code>
      </pre>
    </div>
  );
};

export default SelectAnidados;
