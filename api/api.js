import axios from "axios";

export const getEvents = async () => {
  const { data } = await axios.get("https://pa-backend1.herokuapp.com/events");
  return data;
};

export const postAddressPref = async state => {
  const { data } = await axios
    .post("https://pa-backend1.herokuapp.com/user", state)
    .catch(console.log);
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

