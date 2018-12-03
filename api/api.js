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

export const getEventById = async id => {
  const { data } = await axios.get(
    `https://pa-backend1.herokuapp.com/direction/${id}?start=office`
  );
  console.log(data);
  return data;
};
