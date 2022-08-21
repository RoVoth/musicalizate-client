import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
//Service
import { getPublicationService } from "../../services/publication.services";

function PublicationList() {
  const navigate = useNavigate();

  const [allPublication, setAllPublication] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getPublication();
  }, []);

  const getPublication = async () => {
    try {
      const response = await getPublicationService();
      setAllPublication(response.data);
      setIsFetching(false);
    } catch (error) {
      navigate("/error");
    }
  };
  if (isFetching === true) {
    return <h3>...Loading</h3>;
  }

  return (
    <div>
      <h3>Lista de Publication</h3>

      {allPublication.map((eachPublication) => {
        return (
          <p key={eachPublication._id}>
            <Link to={`/publication/${eachPublication._id}/details`}>
              {eachPublication.title}
            </Link>
          </p>
        );
      })}
    </div>
  );
}

export default PublicationList;
