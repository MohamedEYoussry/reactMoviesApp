import axios from 'axios'
const axiosInstance =axios.create({
    // baseURL:"https://fakestoreapi.com",
    // baseURL:"https://api.themoviedb.org/3/movie/550?api_key=cc1c2621756ba661ed1db615bff890f0"
        baseURL:"https://api.themoviedb.org/3",

    params:{
        "api_key":"cc1c2621756ba661ed1db615bff890f0",
        "page":1    } 
})

export default axiosInstance;