import axios from 'axios';

/* USER */
export function userRegister(user) {
    const request = axios.post(`/api/register`, user)
    return (dispatch) => {
        request.then(({ data }) => {
            let response = {
                success : data.success,
                message : data.message
            }
            dispatch({
                type    : 'USER_REGISTER',
                payload : response    
            })
        })
    }
}

export function loginUser({ email, password }) {
    const request = axios.post(`/api/login`, {email, password})
        .then(response => response.data) 
    return {
        type    : 'USER_LOGIN',
        payload : request
    }
}

export function auth() {
    const request = axios.get('/api/auth')
        .then(response => response.data);

    return {
        type    : 'USER_AUTH',
        payload : request
    }
}

export function getSalons(
    limit = 2,
    order = 'desc',
) {

    const request = axios.get(`/api/salons?limit=${limit}&order=${order}`)
        .then(response => {
            return response.data
        }
    )
    
    return {
        type: 'GET_SALONS',
        payload: request
    }
}

export function getSalonWithID(id) {
    const request = axios.get(`/api/getSalon?id=${id}`)
        .then(response => {
            return response.data
        }
    )
        
    return {
        type: 'GET_SALON',
        payload: request
    }
}