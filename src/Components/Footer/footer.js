import React from "react";
import './footer.css'
class Footer extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="row footer">
                <div className="col-4" style={{ paddingLeft: "10vw" }}>
                    <h4 className="about">Contact Me</h4>
                </div>

                <div className="col-4" style={{ paddingLeft: "10vw" }}>
                    <button className="btn btn-success">Contact Me</button>
                </div>
                <div className="col-4" style={{ paddingLeft: "10vw" }}>
                    <i className="fa-brands fa-linkedin fa-2xl" style={{ paddingLeft: "1vw" }}></i>
                    <i className="fa-brands fa-facebook fa-2xl"  style={{ paddingLeft: "1vw" }}></i>
                    <i className="fa-brands fa-twitter fa-2xl"  style={{ paddingLeft: "1vw" }}></i>

                </div>
            </div>
        )
    }
}
export default Footer;