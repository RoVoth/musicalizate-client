import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Search from "../../components/Search";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
//Service
import { getPublicationService } from "../../services/publication.services";
import videoBg4 from "../../assets/publicaciones.mp4";
import Card from "react-bootstrap/Card";

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
    <div className="main">
      <div className="overlay"></div>
      <video className="videoHome" src={videoBg4} autoPlay loop muted />
      <div className="content">
        <br />
        <h3>Lista de Publication</h3>

        <Search filterByCategory={filterByCategory} />

        {filterPublication.map((eachPublication) => {
          return (
            <Card style={{ width: "30rem" }}>
              <Card.Body>
                <Card.Title style={{ color: "black" }}>
                  <Link to={`/publication/${eachPublication._id}/details`}>
                    <p>{eachPublication.title}</p>
                  </Link>
                </Card.Title>
                <Card.Subtitle
                  style={{ color: "black" }}
                  className="mb-0 text-muted"
                >
                  {eachPublication.category}
                </Card.Subtitle>
                <Card.Text style={{ color: "black" }}>
                  <p key={eachPublication._id}>{eachPublication.description}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default PublicationList;
