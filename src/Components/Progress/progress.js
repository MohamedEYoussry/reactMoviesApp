const Progress = (props) => {
    return (
        <div>
            <label>{props.name}</label>
        <div className="progress" role="progressbar" aria-label="Success example" >
            <div className="progress-bar bg-success" style={{width:props.prog}}></div>
        </div>
        </div>
    )
}

export default Progress