package com.assignment02.onlinestoreservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

import com.assignment02.onlinestoreservice.domain.Transport;

public interface TransportRepository extends JpaRepository<Transport,Long> {

	//get Transport Details By UserId
	@Query("select u from Transport u where u.userID = ?1")
	List<Transport> getTransportIds(String userId);
	
}
