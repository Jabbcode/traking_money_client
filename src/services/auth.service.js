import { axiosClientToken, axiosClient } from "../helpers/axiosClient";

export const LoginService = async (data) => {
    return await axiosClient.post(`/auth/login`, data)
}

export const RegisterService = async (data) => {
    return await axiosClient.post(`/auth/register`, data)
}

export const LogoutService = async () => {
    return await axiosClientToken.post(`/auth/logout`)
}

export const VerifyAuthenticationService = async () => {
    return await axiosClientToken.get('/auth/verify-authenticated')
}