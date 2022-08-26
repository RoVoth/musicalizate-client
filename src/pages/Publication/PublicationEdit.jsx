import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getPublicationDetailsService,
  updatePublicationService,
} from "../../services/publication.services";
import { uploadService } from "../../services/upload.services";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "black",
};

function PublicationEdit() {
  const navigate = useNavigate();

  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#000000");

  const { id } = useParams();

  const [fileUrl, setFileUrl] = useState("");

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleCategoryChange = (event) => setCategory(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);

  useEffect(() => {
    getPublicationDetails(id);
  }, [id]);

  const getPublicationDetails = async (id) => {
    try {
      const response = await getPublicationDetailsService(id);
      setTitle(response.data.title);
      setCategory(response.data.category);
      setDescription(response.data.description);
      setFileUrl(response.data.file);
    } catch (error) {
      navigate("/error");
    }
  };
  const handleEdit = async () => {
    const publicationObj = {
      title: title,
      category: category,
      description: description,
      file: fileUrl,
    };
    try {
      await updatePublicationService(id, publicationObj);
      navigate("/publication");
    } catch (error) {
      navigate("/error");
    }
  };
  const handleFileUpload = async (event) => {
    const form = new FormData();
    form.append("media", event.target.files[0]);

    try {
      setLoading(true);
      setColor();
      const response = await uploadService(form);
      setFileUrl(response.data.fileUrl);
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div id="editar">
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
        <input type="file" onChange={handleFileUpload} />
        <br />
        {fileUrl === null ? (
          <video autoPlay controls width={200}>
            <source src={fileUrl} />
          </video>
        ) : (
          <ClipLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={50}
          />
        )}
        <br />
        <button type="button" onClick={handleEdit}>
          Editar
        </button>
      </form>
    </div>
  );
}

export default PublicationEdit;
