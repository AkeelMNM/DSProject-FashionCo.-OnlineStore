package com.assignment02.onlinestoreservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.assignment02.onlinestoreservice.domain.ShoppingCart;

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

public interface ShoppingCartRepository extends JpaRepository<ShoppingCart,Long> {

	//get
	@Query("select u from ShoppingCart u where u.userID = ?1")
	List<ShoppingCart> getShopping(String userId);
	
	//get product IDs by userId
	@Query("select u from ShoppingCart u where u.userID = ?1")
	List<ShoppingCart> getAllProductIds(String userId);
	
}
