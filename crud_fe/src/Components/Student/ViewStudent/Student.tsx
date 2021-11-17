import React from 'react'
import { IStudent } from '../../../State/Student/student.state'

const Student = (student : IStudent) => {
    return (
        <div className="student" >
            <h2>Fullname : {student.fullname} </h2>
            <h2>Email : {student.email} </h2>
            <h2>Address : {student.address} </h2>
            <h2>Phone Number : {student.phoneNumber} </h2>
        </div>
    )
}

export default Student
