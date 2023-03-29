import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../Components/axiosconfig/instanc";
import './style.scss';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import addToFavourite from "../../Store/action";
import setmovise from "../../Store/movies";
import GetMovies from "../../Store/movies";
const Products = () => {
  const Movies = useSelector((state) => state.getMovies)
  const isFav = useSelector((state) => state.movies)

  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(8)
  const lastPostIndex = currentPage * postPerPage
  const firstPostIndex = lastPostIndex - postPerPage
  const currentPosts = Movies.slice(firstPostIndex, lastPostIndex)
  const lastPage = (Movies.length / 4) - 2

  // Wihout THUNK
  // const [Movies, setMovies] = useState([])
  // useEffect(() => {
  //   axiosInstance.get(`/movie/popular?page=${currentPage}`, {
  //   }).then((res) => {
  //     console.log(res.data.results);
  //     setMovies(res.data.results)
  //   }).catch((err) => {
  //     console.log(err);
  //   })
  // }, [currentPage])

  //ADD TO FAVOURITE
  // console.log(Movies);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetMovies(currentPage))
  },)
  const previous = () => {
    setCurrentPage(currentPage - 1);
  }
  const next = () => {
    setCurrentPage(currentPage + 1)
  }
  const imgurl = "https://image.tmdb.org/t/p/w500/"
  const handleclick = (movie) => {
    dispatch(addToFavourite(movie))
  }
  return (
    <>
      <div >
        {
          currentPosts.map(function (product) {
            return (
              <MDBContainer fluid className="my-5" style={{ display: "inline-block" }} key={product.id}>
                <MDBRow className="justify-content-center row">
                  <MDBCol md="4" className="col">
                    <MDBCard className="text-black col">
                      <button className={'wishlist-btn'}
                        onClick={() => handleclick(product)}>
                        {isFav.find((item) => {
                          return item.id === product.id;
                        }) ? <BsHeartFill /> : <BsHeart />}
                      </button>
                      <Link to={`/details/${product.id}`}>
                        <MDBCardImage
                          src={imgurl + product.poster_path}
                          position="top"
                          alt="Apple Computer"
                        />
                      </Link>
                      <MDBCardBody>

                        <div className="text-center">
                          <MDBCardTitle>

                            {product.title}</MDBCardTitle>
                          <p className="text-muted mb-4">{product.category}</p>
                        </div>

                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>)
 
          })}
      </div>
      <div className="d-flex justify-content-around">
        <div >
          <Button className="btn btn-danger" disabled={currentPage === 1} onClick={() => previous()}>previous</Button>
        </div>
        <div >
          <Button disabled={currentPage === lastPage} onClick={() => next()}>next</Button>
        </div>
      </div>
    </>
  )
}
export default Products