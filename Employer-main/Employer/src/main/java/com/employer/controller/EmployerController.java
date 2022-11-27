package com.employer.controller;

import com.employer.entity.Employer;
import com.employer.entity.Job;
import com.employer.service.EmployerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employer")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployerController {

    @Autowired
    private EmployerService empService;
    
    
    @GetMapping("/test")
    public String Test() {
    	return "sucess";
    }

    @PostMapping("/addemp")
    public Employer addEmp(@RequestBody Employer emp) {
        return empService.addEmp(emp);
    }

    @GetMapping("/getallemp")
    public List<Employer> getAll() {
        return empService.getAllEmp();
    }

    @GetMapping("/getemp/{id}")
    public Employer getByEmp(@PathVariable String id) {
        return empService.getByEmpId(id);
    }

    

    @DeleteMapping("/deleteemp/{id}")
    public String delete(@PathVariable String id) {
        return empService.deleteEmp(id);
    }
    
    
}

