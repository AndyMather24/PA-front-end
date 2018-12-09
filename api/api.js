import axios from "axios";

export const getEvents = async () => {
  const { data } = await axios.get("https://pa-backend1.herokuapp.com/unhandledEvents");

  return data;
};

export const postAddressPref = async state => {
  const { data } = await axios
    .post("https://pa-backend1.herokuapp.com/user", state)
};

export const getEventById = async (id, start) => {
  const { data } = await axios.get(
    `https://pa-backend1.herokuapp.com/direction/${id}?start=${start}`
  );
  return data;
};

export const arrangeEvent = async (id) => {
  const { data } = await axios.patch(
    `https://pa-backend1.herokuapp.com/handledEvent/${id}?handled=true`
  );
  return data;
};

export const getArrangedEventsTransport = async (id) => {
  const { data } = await axios.get(`https://pa-backend1.herokuapp.com/direction/${id}`);
  return data;
};


export const getArrangedEvents = async () => {
  const { data } = await axios.get("https://pa-backend1.herokuapp.com/handledEvents");
  return data;
};