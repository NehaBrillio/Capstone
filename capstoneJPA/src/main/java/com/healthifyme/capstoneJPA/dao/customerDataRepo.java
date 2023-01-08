package com.healthifyme.capstoneJPA.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.healthifyme.capstoneJPA.model.Customer;

public interface customerDataRepo extends CrudRepository<Customer, Integer> {

	
	@Query("from Customer where email=?1")
	Customer findEmail(String email);

}
