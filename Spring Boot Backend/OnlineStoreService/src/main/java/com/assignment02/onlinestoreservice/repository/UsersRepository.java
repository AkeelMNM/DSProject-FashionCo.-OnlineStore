package com.assignment02.onlinestoreservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.assignment02.onlinestoreservice.domain.Account;

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

@Repository
public interface UsersRepository extends JpaRepository<Account,String>{
	
	@Query("SELECT u FROM Account u WHERE u.email = ?1 AND password = ?2")
	Account findByNameAndPassword(String name,String password);
	
}
