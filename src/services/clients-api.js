import axios from "axios"
const URL = 'http://localhost:3001/clients/'

export const getClients = () => {
    const response = axios.get(URL)
    return response
}

export const getClient = (id) => {
    const response = axios.get(`${URL}/${id}`)
    return response
}

export const deleteClient = (id) => {
    const response = axios.delete(`${URL}/${id}`)
    return response
}

export const createClient = (addition) => {
    const response = axios.post(URL, addition)
    return response
}

export const editClient = (id, updated) => {
    const response = axios.put(`${URL}/${id}`, updated)
    return response
}