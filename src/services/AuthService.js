import api from '@/services/Api'

export default {
    register (credentials) {
        return api().post('/user', credentials)
    },
    login (credentials){
        return api().post('/login', credentials)
    },
    adminUp (credentials){
        return api().post('/admin', credentials)
    },
    recovery (credentials){
        return api().post('/user/recovery', credentials)
    }
}