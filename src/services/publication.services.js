import service from "./config.services";

const getPublicationService = () => {
  return service.get("/publication");
};
const getPersonalPublicationService = () => {
  return service.get("/publication/personalPublication");
};
const getPublicationDetailsService = (id) => {
  return service.get(`/publication/${id}`);
};

const addPublicationService = (newPublication) => {
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
  addPublicationService,
  deletePublicationService,
  updatePublicationService,
  getPersonalPublicationService,
};
