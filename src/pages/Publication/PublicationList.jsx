import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Search from "../../components/Search";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
//Service
import { getPublicationService } from "../../services/publication.services";

function PublicationList() {
  const navigate = useNavigate();

  const [allPublication, setAllPublication] = useState([]);
  const [filterPublication, setFilterPublication] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getPublication();
  }, []);

  const getPublication = async () => {
    try {
      const response = await getPublicationService();

      setAllPublication(response.data);
      setFilterPublication(response.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };

  const filterByCategory = (category) => {
    const filterArr = allPublication.filter((eachPublication) => {
      return eachPublication.category.includes(category);
    });
    setFilterPublication(filterArr);
  };

  if (isFetching === true) {
    return <h3>...Loading</h3>;
  }

  return (
    <div>
      <h3>Lista de Publication</h3>

      <Search filterByCategory={filterByCategory} />

      {filterPublication.map((eachPublication) => {
        return (
          <p key={eachPublication._id}>
            <Link to={`/publication/${eachPublication._id}/details`}>
              {eachPublication.title}
              <br />
              {eachPublication.category}
              <br />
              {eachPublication.description}
            </Link>
          </p>
        );
      })}
    </div>
  );
}

export default PublicationList;
