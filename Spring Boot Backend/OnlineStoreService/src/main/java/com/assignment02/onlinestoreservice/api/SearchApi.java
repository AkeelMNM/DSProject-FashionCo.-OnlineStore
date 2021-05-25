package com.assignment02.onlinestoreservice.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assignment02.onlinestoreservice.domain.Products;
import com.assignment02.onlinestoreservice.repository.ProductsRepository;

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

@Service
public class SearchApi {

	@Autowired
	ProductsRepository productsRepository;
	
	//Search product by name or price or brand
	public List<Products> SearchByName(String name){
		return productsRepository.getProductByName(name);
	}
	
}
