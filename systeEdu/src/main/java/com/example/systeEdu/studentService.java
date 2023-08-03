package com.example.systeEdu;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class studentService {
	@Autowired
    private studentRep studentRep;

	// Create a new student
    public student createstudent(student student) {
        return studentRep.save(student);
    }
    
    // Get all students
    
    public List<student> getAllstudent() {
        return studentRep.findAll();
    }

}
