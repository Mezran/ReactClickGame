import React from "react"
import "./style.css"

function Image (props) {
  return(
    <>
      <div className="card">
        <img src={props.link}
        className="card-img-top cardImage"
        alt="something goes here"
        onClick = {props.cB.bind(this, props.name)}/>
      </div>
    </>
  )
}

export default Image;
