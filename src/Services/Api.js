import axios from "axios";

const api = axios.create({
    baseURL: 'https://campainha-inclusiva-production.up.railway.app/'
})

export default api;