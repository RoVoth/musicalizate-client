import service from "./config.services";

const getPublicationService = () => {
  return service.get("/publication");
};

const getPublicationDetailsService = (id) => {
  return service.get(`/publication/${id}`);
};

const AddPublicationService = (newPublication) => {
  return service.post("/publication", newPublication);
};

const deletePublicationService = (id) => {
  return service.delete(`/publication/${id}`);
};

const updatePublicationService = (id, updatePublication) => {
  return service.patch(`/publication/${id}`, updatePublication);
};

export {
  getPublicationService,
  getPublicationDetailsService,
  AddPublicationService,
  deletePublicationService,
  updatePublicationService,
};
