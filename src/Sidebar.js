import React from 'react'

const Sidebar = (props) => {
  return (
    <div className="Sidebar">
      {props.user.displayName}
    </div>
  )
}

export default Sidebar
