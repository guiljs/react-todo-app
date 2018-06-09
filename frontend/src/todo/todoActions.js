import axios from 'axios'
const URL = 'http://localhost:3004/api/todos'
export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    const request = axios.get(`${URL}?sort=createdAt`)
    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
}

export const add = (description) => {
    const request = axios.post(URL, { description })//No ES2015 é igual a description:description se a variável tem o mesmo nome ele já associa
    return {
        type: 'TODO_ADDED',
        payload: request
    }
}