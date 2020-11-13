import api from '@/services/Api'

export default {
    register (credentials) {
        return api().post('/user', credentials)
    },
    ping (hola){
        return api().post('/ping', hola)
    },
    login (credentials){
        return api().post('/login', credentials)
    }
}