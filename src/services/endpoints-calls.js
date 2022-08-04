import axios from "axios"

export const callEndpoint = () => {
    return axios.get("https://rickandmortyapi.com/api/character/2").then(response => response.data);
}