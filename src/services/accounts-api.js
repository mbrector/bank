import axios from "axios"
const URL = 'https://mrbank-api.herokuapp.com/accounts/'

export const getAccounts = () => {
    const response = axios.get(URL)
    return response
}

export const getAccount = (id) => {
    const response = axios.get(`${URL}/${id}`)
    return response
}

export const deleteAccount = (id) => {
    const response = axios.delete(`${URL}/${id}`)
    return response
}

export const createAccount = (addition) => {
    const response = axios.post(URL, addition)
    return response
}

export const editAccount = (id, updated) => {
    const response = axios.put(`${URL}/${id}`, updated)
    return response
}