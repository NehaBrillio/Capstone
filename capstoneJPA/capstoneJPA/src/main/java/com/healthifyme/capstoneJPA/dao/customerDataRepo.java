package com.healthifyme.capstoneJPA.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.healthifyme.capstoneJPA.model.Customer;

public interface customerDataRepo extends JpaRepository<Customer, Integer> {

}
