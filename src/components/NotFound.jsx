import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
  <div className="wrapper">
    <div className="not-found-box">
      <p className="not-found-box_info">Sorry, page not Found</p>
      <Link to = "/list" className="not-found-box_link">Back to List</Link>
    </div>
    
  </div>
)

export default NotFound