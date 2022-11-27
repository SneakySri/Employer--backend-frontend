package com.employer.entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long jobId;
    private String jobTitle;
    private String jobDescription;
    private String skillsRequired;
    private int expRequired;
    private Boolean jobStatus;
    private String employerName;
    private String companyName;
    
    public Job(Long jobId, String jobTitle, String jobDescription, String skillsRequired, int expRequired,
			Boolean jobStatus, String employerName, String companyName) {
		super();
		this.jobId = jobId;
		this.jobTitle = jobTitle;
		this.jobDescription = jobDescription;
		this.skillsRequired = skillsRequired;
		this.expRequired = expRequired;
		this.jobStatus = jobStatus;
		this.employerName = employerName;
		this.companyName = companyName;
	}


	
    
    
	public Job() {
		super();
		// TODO Auto-generated constructor stub
	}





	public Long getJobId() {
		return jobId;
	}





	public void setJobId(Long jobId) {
		this.jobId = jobId;
	}





	public String getJobTitle() {
		return jobTitle;
	}





	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}





	public String getJobDescription() {
		return jobDescription;
	}





	public void setJobDescription(String jobDescription) {
		this.jobDescription = jobDescription;
	}





	public String getSkillsRequired() {
		return skillsRequired;
	}





	public void setSkillsRequired(String skillsRequired) {
		this.skillsRequired = skillsRequired;
	}





	public int getExpRequired() {
		return expRequired;
	}





	public void setExpRequired(int expRequired) {
		this.expRequired = expRequired;
	}





	public Boolean getJobStatus() {
		return jobStatus;
	}





	public void setJobStatus(Boolean jobStatus) {
		this.jobStatus = jobStatus;
	}





	public String getEmployerName() {
		return employerName;
	}





	public void setEmployerName(String employerName) {
		this.employerName = employerName;
	}





	public String getCompanyName() {
		return companyName;
	}





	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

     
	
    
}
