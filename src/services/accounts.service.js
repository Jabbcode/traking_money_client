import { axiosClientToken } from '../helpers/axiosClient'

export const GetAccounts = async () => {
    return await axiosClientToken.get('/accounts')
}

export const GetAccountById = async (id) => {
    return await axiosClientToken.get(`/accounts/${id}`)
}
