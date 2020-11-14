import api from '@/services/Api'

export default {
    index () {
        return api().get('/books/index', )
    },
    create (book){
        return api().post('/books/add', book)
    }
}