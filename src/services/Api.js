import axios from 'axios'
//import { config } from '../../env'

export default  () => {
    return axios.create({
        baseURL: process.env.BASE_URL || 'localhost:8080'
    })
}