import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import axiosInstance from "../../Components/axiosconfig/instanc";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";
const imgurl = "https://image.tmdb.org/t/p/w500/"

const Details = () => {
  const { id } = useParams()
  const [products, setProducts] = useState({})

  useEffect(() => {
    axiosInstance.get(`/movie/${id}`).then((res) => {
      console.log(res);
      setProducts(res.data)

    }).catch((err) => {

    })
  })
  console.log(id);
  return (
    <MDBContainer fluid className="my-5" key={products.id} >
      <MDBRow className="justify-content-center">
        <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
          <MDBCard>
            <div className="d-flex justify-content-between p-3">
              <h5 className="mb-0">   {products.title}
              </h5>                <div
                className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                style={{ width: "35px", height: "35px" }}
              >
                {/* <p className="text-white mb-0 small">x4</p> */}
              </div>
            </div>
            <MDBCardImage
              src={imgurl + products.poster_path}
              position="top"
              alt="Laptop"
            />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#!" className="text-muted">
                    {products.overview}
                  </a>
                </p>
                <p className="small text-danger">
                  {/* <s>$999</s> */}
                </p>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <h5 className="text-dark mb-0">{products.price}</h5>
              </div>
              <p>{products.description}</p>
              <div class="d-flex justify-content-between mb-2">
                <div class="ms-auto text-warning">
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}
export default Details