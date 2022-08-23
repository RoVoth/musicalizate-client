import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//Service
import { getMessageService } from "../services/message.services";

function MessageList({ publicationId }) {
  const navigate = useNavigate();

  const [allMessage, setAllMessage] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getMessage(publicationId);
  }, [publicationId]);

  const getMessage = async (publicationId) => {
    try {
      const response = await getMessageService(publicationId);
      setAllMessage(response.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
      // navigate("/error");
    }
  };
  console.log(allMessage.length);

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
        return <p key={eachMessage._id}>{eachMessage.text} </p>;
      })}
    </div>
  );
}

export default MessageList;
