import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
//Service
import { getPersonalPublicationService } from "../../services/publication.services";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function PersonalPublication() {
  const navigate = useNavigate();

  const [allPublication, setAllPublication] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getPublication();
  }, []);

  const getPublication = async () => {
    try {
      const response = await getPersonalPublicationService();
      setAllPublication(response.data);
      setIsFetching(false);
    } catch (error) {
      navigate("/error");
    }
  };
  if (isFetching === true) {
    return <h3>...Loading</h3>;
  }
  if (allPublication.length === 0) {
    return <h3>Este Perfil no tiene Publicaciones</h3>;
  }
  return (
    <div>
      <h3>Lista de Profile</h3>
      <div className="cardContainer">
        {allPublication.map((eachPublication) => {
          return (
            <div className="cardList">
              <Card style={{ width: "30rem" }}>
                <p key={eachPublication._id}>
                  <Link to={`/publication/${eachPublication._id}/details`}>
                    {eachPublication.title}
                  </Link>
                </p>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PersonalPublication;
