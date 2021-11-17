import httpCommon from '../Services/http.common';
import { IStudent } from '../State/Student/student.state';
class StudentService {
    async getStudents(){
        return await httpCommon.get<Array<IStudent>>("/students");
    }

    createStudent(student : IStudent){
        return httpCommon.post<IStudent>("/students/save",student)
    }
    
    deleteStudent(email : string){
        return httpCommon.delete<any>(`/students/${email}`)
    }


    
}

export default new StudentService();