import React, { useState } from "react";

const Form = () => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);

  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateField = (name, value) => {
    let error = "";

    if (!value.trim()) {
      error = `Por favor, complete los campos.`;
    } else if (name === "name" && (!regexName.test(value) || value.length < 5)) {
      error = `El nombre ingresado no es valido.`;
    } else if (name === "email" && !regexEmail.test(value)) {
      error = `El Email ingresado no es valido`;
    }

    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    for (const key in contact) {
      const error = validateField(key, contact[key]);
      if (error) {
        newErrors[key] = error;
      }
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Ingrese su Nombre completo:"
          value={contact.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Ingrese su Email:"
          value={contact.email}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Enviar</button>
      </form>

      {show && Object.keys(errors).length === 0 ? (
        <p style={{ color: 'green', textAlign: 'center'}}>Gracias por enviarnos su consulta. Lo contactaremos a la brevedad. !</p>
      ) : (
        <div>
          {Object.keys(errors).map((key) => (
            <p key={key} style={{ color: 'red', textAlign: 'center'}}>{errors[key]}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Form;