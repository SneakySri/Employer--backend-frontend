package com.employer.entity;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity

public class Employer {

    @Id
    private String employerName;
    private String companyName;
    private Long ph;
    private String email;
    private String password;
    
    
	public Employer() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Employer(String employerName, String companyName, Long ph, String email, String password) {
		super();
		this.employerName = employerName;
		this.companyName = companyName;
		this.ph = ph;
		this.email = email;
		this.password = password;
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


	public Long getPh() {
		return ph;
	}


	public void setPh(Long ph) {
		this.ph = ph;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}
	
	


}