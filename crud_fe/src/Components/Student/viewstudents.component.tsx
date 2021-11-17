import React, { useState , useEffect} from 'react'
import studentServices from '../../Services/student.services'
import { IStudent } from '../../State/Student/student.state'
import Navigation from '../Common/navigation.component'
import StudentList from './ViewStudent/StudentList'

const ViewStudentList = () => {

    const [students,setStudents] = useState<Array<IStudent>>([]);

    useEffect(() => {
        retrieveStudents();
    }, [])

    const retrieveStudents = () => {
        studentServices.getStudents().then(
            (response : any) => {
                console.log(response);
                setStudents(response.data);
            }
        )
    }

    return (
        <div className="viewStudent">
            <Navigation/>
            <StudentList students={students} />
        </div>
    )
}

export default ViewStudentList
