package com.example.CRUD_be.repositories;

import com.example.CRUD_be.entities.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepo extends JpaRepository<Student, Long> {
    Student findByFullname(String fullname);
    @Override
    boolean existsById(Long id);
    boolean existsByEmail(String email);

}
