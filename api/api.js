import axios from 'axios';

export const getEvents = async () => {
    const { data } = await axios.get("https://pa-backend1.herokuapp.com/events");
        return data;
}