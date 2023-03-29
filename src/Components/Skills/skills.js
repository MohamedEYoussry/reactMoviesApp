import React from 'react';
import './skills.css';
import Progress from  '../Progress/progress';
class Skills extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <>
                <div className='background'>
                    <div className='d-flex flex-column align-items-center'>
                        <h1  >Skills</h1> 
                        <p style={{marginLeft:"20%",marginRight:"20%"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>

                    <div className='row'>
                        <div className='col-6'>
                            <h2>My Focus</h2>
                            <ul className='focus'>
                                <li>BackEnd</li>
                                <li>FrontEnd</li>
                                <li>DataBase</li>
                            </ul>
                        </div>

                        <div className='col-6'>
                            <Progress name="HTML" prog="50%"/>
                            <Progress name="CSS" prog="40%"/>
                            <Progress name="JavaScript" prog="70%"/>
                            <Progress name="JQuery" prog="90%"/>
                            <Progress name="Bootstrap" prog="78%"/>
                            
                            <br/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Skills;