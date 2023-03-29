import React from "react";
// import './About.css';
export default class  About extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <React.Fragment>
            <div className="row">
                <div className="col-3">
                    <h1 className="about">About me</h1>
                </div>

                <div className="col-9">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <a className="btn btn-info" role="button" href="images\resume.pdf" download="resume.pdf">Download resume</a>
                </div>
            </div>
         
                </React.Fragment>
    }
    
}