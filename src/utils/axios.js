import axios from 'axios'

const instance = axios.create({
    URL:"https://fakestoreapi.com"
})

export default instance