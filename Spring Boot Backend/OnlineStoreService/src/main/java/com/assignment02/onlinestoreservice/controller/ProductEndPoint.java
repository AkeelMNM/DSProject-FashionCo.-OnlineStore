package com.assignment02.onlinestoreservice.controller;

import java.util.HashMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.assignment02.onlinestoreservice.domain.Products;
import com.assignment02.onlinestoreservice.exception.ResourceNotFoundException;
import com.assignment02.onlinestoreservice.repository.ProductsRepository;
import com.assignment02.onlinestoreservice.api.ProductApi;


/**
 * @author : M.A.M Nusky
 * Registration Number : IT19167442
 */



@CrossOrigin("*")
@RestController
@RequestMapping("/seller")
public class ProductEndPoint {
	
	private static final Logger logger = LoggerFactory.getLogger("ProductApi.class");
	 
	
	@Autowired
	private ProductApi products;
	@Autowired
	private ProductsRepository sellerrepo;
	
	
	
	//get all seller products
	
	@GetMapping("/products")
	public List<Products> getAllProducts(){
		return sellerrepo.findAll();	
	
	}
	
	//Create products rest api
	@PostMapping("/products")
	public Products createProduct(@RequestBody Products product) {
		
		return sellerrepo.save(product);
	}
	
	// get products by id rest api
		@GetMapping("/products/{id}")
		public ResponseEntity<Products> getProductById(@PathVariable Long id) {
			Products product = sellerrepo.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Products not exist with id :" + id));
			return ResponseEntity.ok(product);
		}
		
		// update products rest api
		
		@PutMapping("/products/{id}")
		public ResponseEntity<Products> updateProduct(@PathVariable Long id, @RequestBody Products productDetails){
			Products products = sellerrepo.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Products not exist with id :" + id));
			
			products.setProductName(productDetails.getProductName());
			products.setProductBrand(productDetails.getProductBrand());
			products.setProductCategory(productDetails.getProductCategory());
			products.setProductPrice(productDetails.getProductPrice());
			products.setProductSize(productDetails.getProductSize());
			products.setDiscription(productDetails.getDiscription());
		
			
			Products updatedproducts = sellerrepo.save(products);
			return ResponseEntity.ok(updatedproducts);
		}
		
		// delete products rest api
		@DeleteMapping("/products/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteProducts(@PathVariable Long id){
			Products products = sellerrepo.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Products not exist with id :" + id));
			
			sellerrepo.delete(products);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
		
		
		// Image Upload
		@PostMapping("/fileupload")
	    public String fileUpload(@RequestParam(required = false, name = "ProductName") String ProductName,
	                             @RequestParam(required = false, name = "ProductBrand") String ProductBrand,
	                             @RequestParam(required = false, name = "ProductCategory") String ProductCategory,
	                             @RequestParam(required = false, name = "ProductPrice") String ProductPrice,
	                             @RequestParam(required = false, name = "ProductSize") String ProductSize,
	                             @RequestParam(required = false, name = "Discription") String Discription,
	                             @RequestParam(required = false, name = "file") MultipartFile file) {
	        try {
	            byte[] image = file.getBytes();
	            Products product = new Products(ProductName, ProductBrand, ProductCategory, ProductPrice, ProductSize, Discription, image);
	            int saveImage = products.saveImage(product);
	            if (saveImage == 1) {
	                return "success";
	            } else {
	                return "error";
	            }
	        } catch (Exception e) {
	            logger.error("ERROR", e);
	            return "error";
	        }
	    }
		
		
		
	
	
	
}
