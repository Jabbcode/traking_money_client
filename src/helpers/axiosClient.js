import axios from "axios";

// I N S T A N C E S
export const axiosClientToken = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

axiosClientToken.interceptors.request.use(
    request => {
        const token = localStorage.getItem('access_token')
        request.headers['Authorization'] = `Bearer ${token}`
        request.headers['Accept'] = 'application/json'
        return request
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)