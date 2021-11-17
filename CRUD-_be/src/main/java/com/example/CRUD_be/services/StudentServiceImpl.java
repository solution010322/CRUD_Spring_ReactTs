package com.example.CRUD_be.services;

import com.example.CRUD_be.entities.Student;
import com.example.CRUD_be.repositories.StudentRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class StudentServiceImpl implements StudentService {

    private final StudentRepo studentRepo;

    @Override
    public Student createStudent(Student student) {
        if (student != null) {
            studentRepo.save(student);
            return student;
        }
        return null;
    }

    @Override
    public Student updateStudent(Long id, Student newUpdatedStudent) {
        if (studentRepo.existsById(id)) {
            Student student = studentRepo.getById(id);
            student.setFullname(newUpdatedStudent.getFullname());
            student.setAddress(newUpdatedStudent.getAddress());
            student.setEmail(newUpdatedStudent.getEmail());
            student.setPhoneNumber(newUpdatedStudent.getEmail());
            log.info("Update Student Successfully !");
            return student;
        }
        log.info("Student is not existed !");
        return null;
    }

    @Override
    public List<Student> getStudens() {
        return studentRepo.findAll();
    }

    @Override
    public boolean validateStudent(Student student) {
        if (studentRepo.existsByEmail(student.getEmail())) {
            return false;
        }
        if (student.getFullname().isEmpty()
                || student.getAddress().isEmpty()
                || student.getEmail().isEmpty()
                || student.getPhoneNumber().isEmpty()
        ) {
            return false;
        }
        return true;
    }
}
