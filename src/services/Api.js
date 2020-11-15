import axios from 'axios'
//import { config } from '../../env'

export default  () => {
    return axios.create({
        baseURL: /*process.env.BASE_URL ||*/ 'http://localhost:8081'
    })
}