import React from 'react'

const Cards = ({ title, description, imageUrl }) => {
    return (
        <div className="card mb-4" style={{ width: "18rem" }}>
            <img className="card-img-top" src={imageUrl} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-danger">Find Out More!</a>
            </div>
        </div>
    )
}

export default Cards