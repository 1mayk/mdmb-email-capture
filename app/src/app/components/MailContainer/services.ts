const ROUTE = "https://dombico.com/api/";

export const createEmail = async (email: string) => {
  const data = await fetch(ROUTE, {
    method: "POST",
    body: JSON.stringify({ email }),
  });

  return data;
};

export const getEmails = async () => {
  const data = await fetch(ROUTE, {
    method: "GET",
  });

  return data;
};
