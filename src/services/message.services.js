import service from "./config.services";

const getMessageService = (messageId) => {
  return service.get(`/message/${messageId}`);
};

const newMessageService = (messageId) => {
  return service.post(`/message/${messageId}`);
};

const deleteMessageService = (messageId) => {
  return service.delete(`message/${messageId}`);
};

export { getMessageService, newMessageService, deleteMessageService };
