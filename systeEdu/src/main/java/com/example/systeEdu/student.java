package com.example.systeEdu;
import jakarta.persistence.*;


@Entity
@Table(name = "infostudent")

public class student {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private Long id;
    private String name;
    private String email;
    private Long old;
	public student(Long id, String name, String email, Long old) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.old = old;
	}
	
	public student() {
		super();
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Long getOld() {
		return old;
	}
	public void setOld(Long old) {
		this.old = old;
	}
    
    
	
}
