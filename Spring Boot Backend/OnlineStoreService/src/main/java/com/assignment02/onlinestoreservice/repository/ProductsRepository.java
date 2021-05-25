package com.assignment02.onlinestoreservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.assignment02.onlinestoreservice.domain.Products;

@Repository
public interface ProductsRepository extends JpaRepository<Products, Long> {

	//Get product
		@Query("select u from Products u where u.id = ?1")
		Products getProduct(Long id);
		
		//Search product by name or price or brand
		@Query("select u from Products u where u.ProductName like  CONCAT('%',?1,'%') or u.ProductBrand like CONCAT('%',?1,'%') or u.ProductPrice like CONCAT('%',?1,'%') ")
		List<Products> getProductByName(String name);
	
}
