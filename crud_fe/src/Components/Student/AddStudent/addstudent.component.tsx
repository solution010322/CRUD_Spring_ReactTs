import React, { useState } from "react";
import studentServices from "../../../Services/student.services";
import { initialStudent, IStudent } from "../../../State/Student/student.state";
import Navigation from "../../Common/navigation.component";
import "../AddStudent/addstudent.style.css";

const AddStudent = () => {
  const [student, setStudent] = useState<IStudent>(initialStudent);

  const handleClicked = (event: React.MouseEvent) => {
    studentServices.createStudent(student)
    .then( (response : any) => {
      setStudent(initialStudent);
    } )
  };

  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "fullname":
        setStudent({ ...student, fullname: event.target.value });
        break;
      case "email":
        setStudent({ ...student, email: event.target.value });
        break;
      case "address":
        setStudent({ ...student, address: event.target.value });
        break;
      case "phonenumber":
        setStudent({ ...student, phoneNumber: event.target.value });
        break;
    }
  };


  return (
    <div className="addStudent">
      <Navigation />
      <div className="addStudent_register">
        Fullname :{" "}
        <input type="text" name="fullname" id="" onChange={handleChange} value={student.fullname} />
        Email : <input type="text" name="email" id="" onChange={handleChange} value={student.email}  />
        Address :{" "}
        <input type="text" name="address" id="" onChange={handleChange} value={student.address}  />
        Phone Number :{" "}
        <input type="text" name="phonenumber" id="" onChange={handleChange} value={student.phoneNumber}  />
        <button type="submit" onClick={handleClicked}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddStudent;
