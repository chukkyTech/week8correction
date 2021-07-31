import React from 'react'
import './Card.css'

function Card(props) {
    return (
        <div>
            <div className="card mb-3 container">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="./img/user.png" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.user.name}</h5>
        <p className="card-text">{props.user.gender}</p>
        <p className="card-text">{props.user.height}</p>

        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Card
