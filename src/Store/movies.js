import axiosInstance from "../../src/Components/axiosconfig/instanc";
export default function GetMovies(currentPage){
    return (dispatch)=>{
     return  axiosInstance.get(`/movie/popular?page=${currentPage}`).then((res) => {  //get movies from api
            console.log((res.data.results)
            )
            dispatch({type:"SET_FAVMOVIE",payload:res.data.results})    //action type payload data      
        })
            .catch((err) => {
                console.log(err);
            })
        }
 }