import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//Service
import { getMessageService } from "../services/message.services";

function MessageList({ publicationId, counter }) {
  const navigate = useNavigate();
  console.log("counter", counter);
  const [allMessage, setAllMessage] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getMessage(publicationId);
  }, [publicationId, counter]);

  const getMessage = async (publicationId) => {
    try {
      setIsFetching(true);
      const response = await getMessageService(publicationId);
      setAllMessage(response.data);
      setIsFetching(false);
    } catch (error) {
      navigate("/error");
    }
  };

  if (isFetching === true) {
    return <h3>...Loading</h3>;
  }
  if (allMessage.length === 0) {
    return <h3>No hay comentarios</h3>;
  }
  return (
    <div>
      <h6>Lista de Comentarios</h6>

      {allMessage.map((eachMessage) => {
        return (
          <div key={eachMessage._id}>
            <p>{eachMessage.text} </p>
            <small>by {eachMessage.username}</small>
          </div>
        );
      })}
    </div>
  );
}

export default MessageList;
