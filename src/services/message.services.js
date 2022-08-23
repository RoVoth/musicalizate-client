import service from "./config.services";

const getMessageService = (publicationId) => {
  return service.get(`/message/${publicationId}`);
};

const newMessageService = (newMessage, publicationId) => {
  return service.post(`/message/${publicationId}`, newMessage);
};

const deleteMessageService = (messageId) => {
  return service.delete(`message/${messageId}`);
};

export { getMessageService, newMessageService, deleteMessageService };
