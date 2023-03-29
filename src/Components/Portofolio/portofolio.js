import React from 'react';
import Cards from './card'
class Portfolio extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <>
                <div className='row'>
                    <h1>Portfolio</h1>
                    <Cards className="col-4" color="black" />
                    <Cards className="col-4" color="lightgrey" />
                    <Cards className="col-4" color="brown" />
                    <Cards className="col-4" color="rgb(48, 48, 48)" />
                    <Cards className="col-4" color="black" />
                    <Cards className="col-4" color="red" />
                </div>
            </>
        )
    }
}

export default Portfolio