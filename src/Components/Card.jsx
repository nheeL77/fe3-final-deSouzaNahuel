import React,{useEffect, useState} from "react";
import dentistImg from '../images/doctor.jpg';
import { useContextGlobal } from "../Components/utils/global.context";

const Card = ({ name, username, id }) => {

  const {favDispatch} = useContextGlobal();
  const [dentist, setDentist] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(response => response.json())
    .then(data => setDentist(data))
  },[])

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    favDispatch({ type: "ADD_FAV", payload: dentist });
  };
  
  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img className="doctor-img" src={dentistImg} alt="Doctor" />
        <h5>{name}</h5>
        <p>{username}</p>
        <p>id : {id}</p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">- Añadir a Favorito -</button>
    </div>
  );
};

export default Card;
