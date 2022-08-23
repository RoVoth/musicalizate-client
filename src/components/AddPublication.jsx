import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPublicationService } from "../services/publication.services";
import { uploadService } from "../services/upload.services";

function AddPublication() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [fileUrl, setFileUrl] = useState(null);

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleCategoryChange = (event) => setCategory(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);

  const handleSubmit = async () => {
    const newPublication = {
      title: title,
      category: category,
      description: description,
      file: fileUrl,
    };

    try {
      await addPublicationService(newPublication);
    } catch (error) {
      navigate(error);
    }
  };

  const handleFileUpload = async (event) => {
    const form = new FormData();
    form.append("media", event.target.files[0]);

    try {
      const response = await uploadService(form);
      setFileUrl(response.data.fileUrl);
    } catch (error) {
      navigate(error);
    }
  };

  return (
    <div>
      <h3>Agregar Publicación</h3>

      <form>
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
        {fileUrl === null ? undefined : (
          <button disabled={false} type="submit" onClick={handleSubmit}>
            Agregar
          </button>
        )}
      </form>
      <div>
        <h3>Añadir Video o Imagen</h3>
        <input type="file" onChange={handleFileUpload} />
        <br />
        {fileUrl !== null ? (
          <video src={fileUrl} autoPlay controls width={300}></video>
        ) : undefined}
      </div>
    </div>
  );
}

export default AddPublication;
