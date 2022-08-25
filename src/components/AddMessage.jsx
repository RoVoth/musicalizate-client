import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { newMessageService } from "../services/message.services";

const AddMessage = ({ publicationId, callback }) => {
  const navigate = useNavigate();

  const [text, setText] = useState("");

  const handleTextChange = (event) => setText(event.target.value);

  const handleSubmit = async (publicationId) => {
    const newMessage = {
      text: text,
    };

    try {
      await newMessageService(newMessage, publicationId);

      setText("");
    } catch (error) {
      navigate(error);
    }
  };

  return (
    <div>
      <h3> Agregar Comentario </h3>
      <form>
        <label htmlFor="text">Comentario:</label>
        <input
          type="text"
          name="text"
          onChange={handleTextChange}
          value={text}
        />
        <br />
        <button
          type="button"
          onClick={async () => {
            await handleSubmit(publicationId);
            callback((oldCounter) => oldCounter + 1);
          }}
        >
          Comentar
        </button>
      </form>
    </div>
  );
};

export default AddMessage;
