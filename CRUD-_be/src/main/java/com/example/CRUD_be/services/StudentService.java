package com.example.CRUD_be.services;

import com.example.CRUD_be.entities.Student;

import java.util.List;

public interface StudentService {

    Student createStudent(Student student);
    Student updateStudent(Long id, Student student);
    List<Student> getStudens();
    boolean validateStudent(Student student);

}
