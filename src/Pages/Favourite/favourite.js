import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { delFav } from "../../Store/action";


const Favourite = () => {
    const favMovie = useSelector(state => state.movies)
    console.log(favMovie)

    const dispatch = useDispatch()
    const delMovie = (index) => {
        favMovie.splice(index, 1)
        dispatch(delFav(favMovie))
    }

    return (
        <div className='row'>
            {favMovie.map((movie, index) =>
                <Card key={index} style={{ width: '300px', height: 'auto' }}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} style={{ width: "100%", height: "300px" }} />
                    <button onClick={() => delMovie(index)} style={{ border: "none", backgroundColor: "transparent" }}><i class="fa-solid fa-trash"></i></button>
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                    </Card.Body>
                </Card>)}
        </div>
    );
}
export default Favourite;