import React from 'react'

export default function Alert1(props) {
  return (
    props.msg &&<div className={`alert alert-${props.msg.type} alert-dismissible fade show`} role="alert">
    <strong>{props.msg.type[0].toUpperCase()+props.msg.type.slice(1)}</strong>: {props.msg.msg}
   </div>
  )
}
