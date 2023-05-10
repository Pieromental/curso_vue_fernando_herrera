import axios from 'axios'

const journalApi = axios.create({
    baseURL:'https://vuepracticas-default-rtdb.firebaseio.com'
})

export default journalApi