import axios from "axios";

export const apiCall = ({ method, url, body = {} }) => {
  let config = {
    method,
    maxBodyLength: Infinity,
    url,
    headers: {
      "Content-Type": "application/json",
    },
    data: method === API_METHODS.GET ? "" : body,
  };
  axios(config)
    .then((response) => {
      if (response) {
        return response;
      }
    })
    .catch((err) => err);
};
