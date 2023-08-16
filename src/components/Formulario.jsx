import React, { useState } from 'react';


function Formulario() {
  const [nombre, setNombre] = useState('');
  const [auto, setAuto] = useState('');
  const [errorNombre, setErrorNombre] = useState('');
  const [errorAuto, setErrorAuto] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.length < 2) {
      setErrorNombre('El nombre debe tener al menos 2 caracteres');
      return;
    } else {
      setErrorNombre('');
    }

    if (auto.length < 2) {
      setErrorAuto('El nombre del auto debe tener al menos 2 caracteres');
      return;
    } else {
      setErrorAuto('');
    }

    setSubmittedData({ nombre, auto });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          {errorNombre && <p className="error">{errorNombre}</p>}
        </div>
        <div>
          <label>Auto:</label>
          <input type="text" value={auto} onChange={(e) => setAuto(e.target.value)} />
          {errorAuto && <p className="error">{errorAuto}</p>}
        </div>
        <button type="submit">Enviar</button>
      </form>
      {submittedData && (<p>
          Hola {submittedData.nombre}, tu auto elegido es {submittedData.auto}.
        </p>)}
    </div>
  );
}

export default Formulario; 