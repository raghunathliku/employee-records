import React from 'react'

const EmpInfo = ({ele,ind}) => {
  return (
    <div key={ind}>
          <img src={ele.imageUrl} alt="Faield to load image" />
          <p>Id      :{ele.id}</p>
          <p>Name    :{ele.firstName} {ele.lastName}</p>
          <p>Mail    :{ele.email}</p>
          <p>Contact :{ele.contactNumber}</p>
          <p>Age     :{ele.age}</p>
          <p>DOB     :{ele.dob}</p>
          <p>salary  :{ele.salary}</p>
        </div>
  )
}

export default EmpInfo
