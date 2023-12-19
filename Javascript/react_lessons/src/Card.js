import React from 'react'
import "./App"
import Nav from "./Nav";

function Card(props) {

  var name="Jamie" 

  return (
    <div className='cardHolder'>
        <div className='card'>
            <img src={props.img} alt={props.alt}/>
            <h3>{props.name}</h3>
            <h4>{props.job}</h4>
            <p>{props.hobbies}</p>
            <Nav
                link1={props.socialMedia}
                link2="Twitter"
                link3="YouTube"
              />
        </div>
    </div>
  )
}

export default Card