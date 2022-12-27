package com.healthifyme.capstoneJPA.model;

import org.springframework.beans.factory.annotation.Value;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class Customer {
//	@Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    @Column(name = "user_id")
//	private int user_id;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "user_id")
	private int id;
	
//	@Column(nullable = true)
//	@Value("${property_name:#{null}}")
//	@Column(nullable = false, unique = true, length = 60)
   private String email;
//	@Column(nullable = true)
//	@Value("${property_name:#{null}}")
//   @Column(nullable = false, length = 8)
   private String password;  
//	@Column(nullable = true)
//	@Value("${property_name:#{null}}")
//   @Column( nullable = false, length = 50)
   private String fname;
//	@Column(nullable = true)
//	@Value("${property_name:#{null}}")
//   @Column(nullable = false, length = 50)
   private String lname;
//	@Column(nullable = true)
//	@Value("${property_name:#{null}}")
   @Column(nullable = false, length = 1)
   private String gender;
	@Column(nullable = true)
	@Value("${property_name:#{null}}")
   private boolean prime;
	@Column(nullable = true)
	@Value("${property_name:#{null}}")
   private int age;
	
	@Column(nullable = true)
	@Value("${property_name:#{null}}")
	private int height;
	
	@Column(nullable = true)
	@Value("${property_name:#{null}}")
	private int weight;
	
	
	@Column(nullable = true)
	@Value("${property_name:#{null}}")
	 private double mon;
	
	@Column(nullable = true)
	@Value("${property_name:#{null}}")
	 private double tue;
	
	@Column(nullable = true)
	@Value("${property_name:#{null}}")
	 private double wed;
	
	@Column(nullable = true)
	@Value("${property_name:#{null}}")
	 private double thur;
	
	@Column(nullable = true)
	@Value("${property_name:#{null}}")
	 private double fri;
	
	@Column(nullable = true)
	@Value("${property_name:#{null}}")
	 private double sat;
	
	@Column(nullable = true)
	@Value("${property_name:#{null}}")
	 private double sun;
  
 
   public int getId() {
	return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	
	public int getAge() {
		return age;
	}
	
	public void setAge(int age) {
		this.age = age;
	}
	
	public int getHeight() {
		return height;
	}
	
	public void setHeight(int height) {
		this.height = height;
	}
	
	public int getWeight() {
		return weight;
	}
	
	public void setWeight(int weight) {
		this.weight = weight;
	}
	
	public double getMon() {
		return mon;
	}
	
	public void setMon(double mon) {
		this.mon = mon;
	}
	
	public double getTue() {
		return tue;
	}
	
	public void setTue(double tue) {
		this.tue = tue;
	}
	
	public double getWed() {
		return wed;
	}
	
	public void setWed(double wed) {
		this.wed = wed;
	}
	
	public double getThur() {
		return thur;
	}
	
	public void setThur(double thur) {
		this.thur = thur;
	}
	
	public double getFri() {
		return fri;
	}
	
	public void setFri(double fri) {
		this.fri = fri;
	}
	
	public double getSat() {
		return sat;
	}
	
	public void setSat(double sat) {
		this.sat = sat;
	}
	
	public double getSun() {
		return sun;
	}
	
	public void setSun(double sun) {
		this.sun = sun;
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
	
	public String getfname() {
		return fname;
	}
	
	public void setfname(String fname) {
		this.fname = fname;
	}
	
	public String getlname() {
		return lname;
	}
	
	public void setlname(String lname) {
		this.lname = lname;
	}
	
	public String getGender() {
		return gender;
	}
	
	public void setGender(String gender) {
		this.gender = gender;
	}
	
	public boolean isPrime() {
		return prime;
	}
	
	public void setPrime(boolean prime) {
		this.prime = prime;
	}

}
