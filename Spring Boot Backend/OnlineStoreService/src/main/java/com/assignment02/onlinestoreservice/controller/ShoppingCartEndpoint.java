package com.assignment02.onlinestoreservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.assignment02.onlinestoreservice.api.ShoppingCartApi;
import com.assignment02.onlinestoreservice.domain.Products;
import com.assignment02.onlinestoreservice.domain.ShoppingCart;
import com.assignment02.onlinestoreservice.dto.ShoppingCartDto;

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

@CrossOrigin("*")
@RestController
@RequestMapping("/shoppingCart")
public class ShoppingCartEndpoint {

	private final ShoppingCartApi  shoppingCartApi;
	
	@Autowired
	public ShoppingCartEndpoint(ShoppingCartApi shoppingCartApi) {
		this.shoppingCartApi = shoppingCartApi;
	}
	
	//get all Shopping cart
	@GetMapping("/get/{id}")
	public List<ShoppingCart> getShoppingCartDeatils(@PathVariable String id){
		return shoppingCartApi.getShoppingCartById(id);
	}
	
	//Add shopping cart
	@PostMapping("/add")
	public ResponseEntity<String> saveShoopingCart(@RequestBody ShoppingCartDto shoppingCartDto){
		ShoppingCart shoppingCart = new ShoppingCart();
		
		shoppingCart.setUserID(shoppingCartDto.getUserID());
		shoppingCart.setProductId(shoppingCartDto.getProductId());;
		shoppingCart.setQty(shoppingCartDto.getQty());
		
		shoppingCartApi.AddToShoppingCart(shoppingCart);
		
		return ResponseEntity.ok("Added Shopping Cart");
	}
	
	//delete in to shoppingCart
	@DeleteMapping("/removeProducts/{id}")
	public ResponseEntity<Void> removeScProduct(@PathVariable long id){
		return shoppingCartApi.removeScProduct(id);
	}
	
	
/* ------------------------ products --------------------*/
	
	//Get all product details
	@GetMapping("/getProducts")
	public List<Products> getAllProducts(){
		return shoppingCartApi.getAllProduct();
	}
	
	//get products by id rest api
	@GetMapping("/getProducts/{id}")
	public List<ShoppingCartDto> getAllProductByUserId(@PathVariable String id) {
		return shoppingCartApi.getAllScProducts(id);
	}
	
	
}
