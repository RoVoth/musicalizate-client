import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getPublicationDetailsService,
  updatePublicationService,
} from "../../services/publication.services";

function PublicationEdit() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleCategoryChange = (event) => setCategory(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const handleFileChange = (event) => setFile(event.target.value);

  useEffect(() => {
    getPublicationDetails(id);
  }, [id]);

  const getPublicationDetails = async (id) => {
    try {
      const response = await getPublicationDetailsService(id);
      console.log(response.data);
      setTitle(response.data.title);
      setCategory(response.data.category);
      setDescription(response.data.description);
      //  setFile(response.data.file); ARREGLARLO!
    } catch (error) {
      navigate("/error");
    }
  };
  const handleEdit = async () => {
    const publicationObj = {
      title: title,
      category: category,
      description: description,
      file: file,
    };
    try {
      await updatePublicationService(id, publicationObj);
      navigate("/profile");
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div>
      <h3>Formulario de Edit</h3>

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
        <label htmlFor="file">Archivo </label>
        <input
          type="file"
          name="file"
          onChange={handleFileChange}
          value={file}
        />
        <br />
        <button onClick={handleEdit}>Editar</button>
      </form>
    </div>
  );
}

export default PublicationEdit;
