package com.assignment02.onlinestoreservice.api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.assignment02.onlinestoreservice.domain.Products;
import com.assignment02.onlinestoreservice.domain.ShoppingCart;
import com.assignment02.onlinestoreservice.dto.ShoppingCartDto;
import com.assignment02.onlinestoreservice.repository.ProductsRepository;
import com.assignment02.onlinestoreservice.repository.ShoppingCartRepository;

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

@Service
public class ShoppingCartApi {

	@Autowired
	private ShoppingCartRepository shoppingCartRepository;
	
	@Autowired
	ProductsRepository productsRepository;
	
	//get Shopping cart details by user id
	public List<ShoppingCart> getShoppingCartById(String userId){
		return shoppingCartRepository.getShopping(userId);
	}
	
	// Add
	public ShoppingCart AddToShoppingCart(ShoppingCart shoppingCart) {
		return shoppingCartRepository.save(shoppingCart);
	}
	
	//get all product ids
	private List<ShoppingCart> getAllProductIdByUser(String userId){
		return shoppingCartRepository.getAllProductIds(userId);
	}
	
	//get All Shopping Cart product details
	public List<ShoppingCartDto> getAllScProducts(String userId){
		List<ShoppingCart> list = getAllProductIdByUser(userId);
		
		List<Products> productList = new ArrayList<Products>();
		
		for (int i = 0; i < list.size(); i++) {
			productList.add(getProductById(list.get(i).getProductId()));	
		}
		
		List<ShoppingCartDto> resultList = new ArrayList<ShoppingCartDto>();
		
		for (int i = 0; i < productList.size(); i++) {
			ShoppingCartDto cart = new ShoppingCartDto();
			
			cart.setName(productList.get(i).getProductName());
			cart.setPrice(productList.get(i).getProductPrice());
			cart.setProductId(productList.get(i).getId());
			cart.setQty(list.get(i).getQty());
			cart.setSize(productList.get(i).getProductSize());
			cart.setId(list.get(i).getId());
			cart.setImage(productList.get(i).getImage());
			cart.setUserID(userId);
			
			resultList.add(cart);
		}
		
		return resultList;
	}
	
	public List<Products> getAllProduct(){
		return productsRepository.findAll();
	}
	
	//Delete into shoppingCart	
	public ResponseEntity<Void> removeScProduct(long id){
		shoppingCartRepository.deleteById(id);
		
		return ResponseEntity.noContent().build();
	}
	

	
/* ------------------------------------------------------- Products --------------------  */	

	// get products by id rest api
	public Products getProductById(Long id) {
		return productsRepository.getProduct(id);
	}
	
	
	
}
