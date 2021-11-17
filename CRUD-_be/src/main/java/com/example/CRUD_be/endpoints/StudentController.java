package com.example.CRUD_be.endpoints;

import com.example.CRUD_be.entities.Student;
import com.example.CRUD_be.services.StudentServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "http://localhost:3000/")
public class StudentController {

    private final StudentServiceImpl studentService;

    @PostMapping("/students/save")
    public ResponseEntity<Student> registerStudent(@RequestBody Student student) {
        if (studentService.validateStudent(student)) {
            return ResponseEntity.ok().body(studentService.createStudent(student));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).build();
        }
    }

    @GetMapping("/students")
    public ResponseEntity<List<Student>> getStudents() {
        List<Student> students = studentService.getStudens();
        if (students.isEmpty() || students == null) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).build();
        } else {
            return ResponseEntity.ok().body(students);
        }
    }
}
