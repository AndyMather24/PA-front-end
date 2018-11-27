import axios from 'axios';

export const getEvents = () => {
    return axios.get('https://pa-back-end.herokuapp.com/events').then(({ data }) => {
        return data;
    })
}