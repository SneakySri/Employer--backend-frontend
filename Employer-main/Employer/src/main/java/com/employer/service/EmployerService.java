package com.employer.service;

import com.employer.entity.Employer;
import com.employer.entity.Job;
import com.employer.repository.EmployerRepository;
import com.employer.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployerService {

    @Autowired
    private JobRepository jobRepo;

    @Autowired
    private EmployerRepository empRepo;

    private Employer curEmp=new Employer();
    
    public Job addJob(Job job){
        return jobRepo.save(job);
    }
    
    

    public List<Job> getJobByEmpId(String name){
    	
    	curEmp=getByEmpId(name);
        List<Job> job = jobRepo.findAll();
        List<Job> list = new ArrayList<>();
        int n = job.size();
        for(int i=0;i<n;i++){
            Job j = job.get(i);
            if(j.getEmployerName().equals(name)){
                list.add(j);
            }
        }
        return list;
    }

    public Job getByJobId(Long id){
        List<Job> job = jobRepo.findAll();
        return job.stream().filter(j -> j.getJobId()==id).findAny().orElse(null);
    }

    public List<Job> getAll(){
        return jobRepo.findAll();
    }

    public String deleteJob(Long id){

         jobRepo.deleteById(id);
         return "deleted";
    }

    //Employer
    public Employer addEmp(Employer emp){
        return empRepo.save(emp);
    }

    public List<Employer> getAllEmp(){
        return empRepo.findAll();
    }

    public Employer getByEmpId(String name){
        List<Employer> emp = empRepo.findAll();
        return emp.stream().filter(e->e.getEmployerName().equals(name)).findAny().orElse(null);
    }

    public String deleteEmp(String name){

    	Employer e=getByEmpId(name);
        empRepo.delete(e);
        
        List<Job> job = jobRepo.findAll();

        int n = job.size();
        for(int i=0;i<n;i++){
            Job j = job.get(i);
            if(j.getEmployerName().equals(name)){
                jobRepo.deleteById(j.getJobId());
            }
        }
        return "deleted";
    }

	public String test() {
		// TODO Auto-generated method stub
		Job j=new Job(1L,"Developer","chennai 2lpa ","java spring",3,false,"Sriram","Sri Tech");
		Employer e=new Employer("Sriram","Sri Tech",7448867464l,"mailtosriram2000@gmail.com","111");
		addJob(j);
		addEmp(e);
		
		return "sucess";
	}
}
