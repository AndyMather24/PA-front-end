import axios from 'axios';

export const getEvents = async () => {
    const { data } = await axios.get('https://pa-back-end.herokuapp.com/events')
        return data;
}

export const getTravel = async () => {
 
    const {data} = await axios.get('https://pa-back-end.herokuapp.com/direction')
    return data;
}