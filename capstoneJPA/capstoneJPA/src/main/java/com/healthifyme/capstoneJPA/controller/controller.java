package com.healthifyme.capstoneJPA.controller;




import java.util.Calendar;
import java.util.List;
import java.util.Optional;

 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;


import com.healthifyme.capstoneJPA.dao.customerDataRepo;
import com.healthifyme.capstoneJPA.model.Customer;
@CrossOrigin(origins = "http://localhost:3000/")
@RestController
//@RequestMapping("/api")
public class controller {


    @Autowired
    customerDataRepo userRepo;


    @PostMapping(path="/user_details")

    public Customer sendDetails(Customer cust)
    {
    	return (Customer) userRepo.save(cust);    
    }
    @GetMapping(path="/user_details")
	public List<Customer> getDetails(){
		
		return (List<Customer>)userRepo.findAll();
	}
  

}
