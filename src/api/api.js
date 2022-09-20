import axios from "axios";

const API = axios.create({
    baseURL: 'https://api.disneyapi.dev'
})

export const api = {
    getAll: async (id) => {
        let response = await API.get(`/characters?page=${id}`);
        return response.data;
    }
}