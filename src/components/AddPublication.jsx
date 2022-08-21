import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddPublicationService } from "../services/publication.services";

function AddPublication() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleCategoryChange = (event) => setCategory(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const handleFileChange = (event) => setFile(event.target.value);

  const handleSubmit = async () => {
    const newPublication = {
      title: title,
      category: category,
      description: description,
      file: file,
    };

    try {
      await AddPublicationService(newPublication);
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div>
      <h3>Agregar Publicación</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Titulo </label>
        <input
          type="text"
          name="title"
          onChange={handleTitleChange}
          value={title}
        />
        <br />
        <label htmlFor="category">Categoria </label>
        <input
          type="text"
          name="category"
          onChange={handleCategoryChange}
          value={category}
        />
        <br />
        <label htmlFor="description">Descripción </label>
        <input
          type="text"
          name="description"
          onChange={handleDescriptionChange}
          value={description}
        />
        <br />
        <label htmlFor="file">Archivo </label>
        <input
          type="file"
          name="file"
          onChange={handleFileChange}
          value={file}
        />
        <br />
        <button>Agregar</button>
      </form>
    </div>
  );
}

export default AddPublication;
