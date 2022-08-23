import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import AddMessage from "../../components/AddMessage";
//Service
import {
  deletePublicationService,
  getPublicationDetailsService,
} from "../../services/publication.services";

function PublicationDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [singlePublication, setSinglePublication] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getSinglePublication();
  }, []);

  const getSinglePublication = async () => {
    try {
      const response = await getPublicationDetailsService(id);
      setSinglePublication(response.data);
      setIsFetching(false);
    } catch (error) {
      navigate("/error");
    }
  };

  const handleDelete = async () => {
    try {
      await deletePublicationService(id);
      navigate("/profile");
    } catch (error) {
      navigate("/error");
    }
  };

  if (isFetching === true) {
    return <h3>...Loading</h3>;
  }

  return (
    <div>
      <h3>Detalles de la Publicacion</h3>

      <p>Titulo: {singlePublication.title}</p>
      <p>Categoria: {singlePublication.category}</p>
      <p>Descripción: {singlePublication.description}</p>
      <video autoPlay controls width={300}>
        <source src={singlePublication.file} />
      </video>
      <br />
      <button onClick={handleDelete}>Borrar</button>
      <Link to={`/publication/${singlePublication._id}/edit`}>
        <button>Editar</button>
      </Link>
      <br />
      <div>
        <AddMessage />
      </div>
    </div>
  );
}

export default PublicationDetails;
