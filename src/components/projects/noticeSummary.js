import React from 'react'
import moment from 'moment'
const noticeSummary1 = ({ project4 }) => {
  console.log(project4)
  return (
    <div className=" container ">
      <div className='card z-depth-5' style={{border: '5px'}} >
        <div className="card-panel col s4 m4 teal darken-3">
          <span className="white-text">DEPT <span className="yellow-text"><b>{project4.dept}</b></span></span>
          <div>{project4.dept}</div>
          {/* following visting day sholud be print on all doctors list */}
          <div style={{display:'none'}}><span > </span><span className="yellow-text">{project4.Body1}</span></div>
          <div><span className="white-text">By {project4.authorFirstName} {project4.authorLastName} {moment(project4.createdAt.toDate()).calendar()} </span>-
          </div>
        </div>
      </div>
    </div>
  )
}
export default noticeSummary1
