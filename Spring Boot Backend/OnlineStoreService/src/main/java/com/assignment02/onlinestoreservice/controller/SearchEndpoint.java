package com.assignment02.onlinestoreservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.assignment02.onlinestoreservice.api.SearchApi;
import com.assignment02.onlinestoreservice.domain.Products;

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

@CrossOrigin("*")
@RestController
@RequestMapping("/search")
public class SearchEndpoint {

	private final SearchApi searchApi ;
	
	@Autowired
	public SearchEndpoint(SearchApi searchApi) {
		this.searchApi = searchApi;
	}
	
	//Search Products
	@GetMapping("/get/{name}")
	public List<Products> getProductByName(@PathVariable String name){
		return searchApi.SearchByName(name);
	}
	
}
