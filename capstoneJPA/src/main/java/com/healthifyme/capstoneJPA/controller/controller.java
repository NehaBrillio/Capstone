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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import com.healthifyme.capstoneJPA.dao.customerDataRepo;
import com.healthifyme.capstoneJPA.model.Customer;





@CrossOrigin()
@RestController


public class controller {


    @Autowired
    customerDataRepo userRepo;


    @PostMapping(path="/user_details",consumes = MediaType.APPLICATION_JSON_VALUE)
    public Customer sendDetails(@RequestBody Customer cust)
    {
    	System.out.println(cust);
    	return (Customer) userRepo.save(cust);    
    }
    
    @GetMapping(path="/user_details")
	public List<Customer> getDetails(){
		
		return (List<Customer>)userRepo.findAll();
	}
    @GetMapping(path="/user_details/{email}")
	public Customer getGlobalValue(@PathVariable String email){
//		System.out.println(email);
		Customer temp = userRepo.findEmail(email);
		return (temp);
	}
    
    @PutMapping("/user_details/{us}")
    public Customer putUser(@RequestBody Customer val) {

        System.out.println(val);

        return userRepo.save(val);
        }

}
