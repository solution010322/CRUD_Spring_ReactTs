import React, { useState } from 'react'
import studentServices from '../../../Services/student.services';
import { IStudent } from '../../../State/Student/student.state';

const StudentList = (props : {students : Array<IStudent>}) => {
    const students = props.students;
    const [studentList,setStudentList] = useState<Array<IStudent>>(students);
    const handleClick = (event : React.MouseEvent) => {
        if(event.currentTarget.getAttribute('name') === 'deleteStudent'){
            
        }else{

        }
    }
    
    const deleteStudent = (id : number) => {
        
    }

    return (
        <table className="studentList" >
            <thead>
                <td>Fullname</td>
                <td>Email</td>
                <td>Address</td>
                <td>Phone Number</td>
                <td colSpan={2} >Actions</td>
            </thead>
            <tbody>
                {
                    studentList.map(student => {
                        return(
                            <tr>
                                <td>{student.fullname}</td>
                                <td>{student.email}</td>
                                <td>{student.address}</td>
                                <td>{student.phoneNumber}</td>
                                <td><button name="deleteStudent" onClick={handleClick} >Delete</button></td>
                                <td><button name="updateStudent" onClick={handleClick} >Update</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default StudentList
