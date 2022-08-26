import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import AddMessage from "../../components/AddMessage";
import { AuthContext } from "../../context/auth.context";
import ListMessage from "../../components/ListMessage";
import detailsIMG from "../../assets/detalles.png";
//Service
import {
  deletePublicationService,
  getPublicationDetailsService,
} from "../../services/publication.services";

function PublicationDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user, isUserActive } = useContext(AuthContext);
  const [singlePublication, setSinglePublication] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [localMessageCounter, setLocalMessageCounter] = useState(0);
  const isUserPublicationOwner = user?._id === singlePublication?.owner;

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
    <div id="detalles">
      <h3>Detalles de la Publicacion</h3>

      <p>Titulo: {singlePublication.title}</p>
      <p>Categoria: {singlePublication.category}</p>
      <p>Descripción: {singlePublication.description}</p>
      <video autoPlay controls width={300}>
        <source src={singlePublication.file} />
      </video>
      <br />
      {isUserPublicationOwner ? (
        <div>
          <button onClick={handleDelete}>Borrar</button>
          <Link to={`/publication/${singlePublication._id}/edit`}>
            <button>Editar</button>
          </Link>
        </div>
      ) : undefined}

      <br />
      {isUserActive ? (
        <div>
          <AddMessage
            callback={setLocalMessageCounter}
            publicationId={singlePublication._id}
          />
          <ListMessage
            counter={localMessageCounter}
            publicationId={singlePublication._id}
          />
        </div>
      ) : undefined}
    </div>
  );
}

export default PublicationDetails;
