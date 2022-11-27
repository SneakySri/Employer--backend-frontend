package com.employer.controller;

import com.employer.entity.Employer;
import com.employer.entity.Job;
import com.employer.service.EmployerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/job")
public class JobController {

    @Autowired
    private EmployerService empService;
    
    private Employer curEmp=new Employer();
    
     
    @PostMapping("/add")
    public Job addJob(@RequestBody Job job){
    	
    	job.setCompanyName(curEmp.getCompanyName());
    	
        return empService.addJob(job);
    }
    
    @PutMapping("/edit")
    public Job editJob(@RequestBody Job job){
    	
    	job.setCompanyName(curEmp.getCompanyName());
    	
        return empService.addJob(job);
    }

    @GetMapping("/getall")
    public List<Job> getAll(){
        return empService.getAll();
    }

    @GetMapping("/getjob/{id}")
    public Job getByJob(@PathVariable Long id){
        return empService.getByJobId(id);
    }

    @GetMapping("/getemp/{id}")
    public List<Job> getByEmp(@PathVariable String id){
    	curEmp=empService.getByEmpId(id);
        return empService.getJobByEmpId(id);
    }

    @GetMapping("/test")
    public String test(){
        return "Testing";
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable Long id){
    	System.out.println("delete");
        String s = empService.deleteJob(id);
        return s;
    }
    
    
}
