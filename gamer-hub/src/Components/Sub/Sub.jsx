import React from 'react'
import '../Sub/Sub.css'

 function Sub(props){
    return (
      <section className="head-sect" key={props.key}>
        <h3 className="gen-head">{props.head}</h3>
      </section>
    )
  }

  export default Sub;