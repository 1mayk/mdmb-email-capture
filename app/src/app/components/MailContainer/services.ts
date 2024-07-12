import axios from "axios";

export interface IEmailCapture {
  id?: number;
  description?: string;
}

const ROUTE = "https://click-help.onrender.com/emailCapture/createEmail";

export const createEmail = async (payload: IEmailCapture) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.post(ROUTE, payload, config);

  return response.data;
};

export const getEmails = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.get(
    "https://click-help.onrender.com/emailCapture/getEmails",
    config
  );

  return response;
};
