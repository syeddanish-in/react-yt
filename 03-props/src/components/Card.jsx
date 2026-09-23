import React from 'react'

const Card = (props) => {
    console.log(props);
    return (
        <div className="card">
            <img src={props.src} alt="profile_image" />
            <h1>{props.user} {props.age}</h1>
            <p>{props.description}</p>
            <button>View more</button>
        </div>
    )
}

export default Card
