import api from '@/services/Api'

export default {
    register (credentials) {
        return api().post('/user', credentials)
    },
    login (credentials){
        return api().post('/login', credentials)
    }
}