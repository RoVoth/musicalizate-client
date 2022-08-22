import service from "./config.services";

const uploadService = (file) => {
  return service.post("/upload", file);
};

export { uploadService };
