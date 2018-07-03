import React from 'react'

const Message = (props) => {
  return (
    <div className="Message">
      {props.message.userName}: {props.message.body}
    </div>
  )
}

export default Message
