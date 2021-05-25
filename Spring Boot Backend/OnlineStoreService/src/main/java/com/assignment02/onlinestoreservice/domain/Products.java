package com.assignment02.onlinestoreservice.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name="products")


public class Products {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="Product_Name")
	private String ProductName;
	
	@Column(name="Product_Brand")
	private String ProductBrand;
	
	@Column(name="Product_Category")
	private String ProductCategory;
	
	@Column(name="Product_Price")
	private String ProductPrice;
	
	@Column(name="Product_Size")
	private String ProductSize;
	
	@Column(name="Discription")
	private String Discription;
	
	 @Lob
	@Column(name="Image")
	private byte[] image;
	
	
	
	 
	 
	 
	 
	public Products() {
		
		
	}

	
	public Products( String productName, String productBrand, String productCategory, String productPrice,
			String productSize, String discription, byte[] image) {
		super();
	
		ProductName = productName;
		ProductBrand = productBrand;
		ProductCategory = productCategory;
		ProductPrice = productPrice;
		ProductSize = productSize;
		Discription = discription;
		this.image = image;
	}




	public Products(long id, String productName, String productBrand, String productCategory, String productPrice,
			String productSize, String discription, byte[] image) {
		super();
		this.id = id;
		ProductName = productName;
		ProductBrand = productBrand;
		ProductCategory = productCategory;
		ProductPrice = productPrice;
		ProductSize = productSize;
		Discription = discription;
		this.image = image;
	}





	public long getId() {
		return id;
	}
	public byte[] getImage() {
		return image;
	}





	public void setImage(byte[] image) {
		this.image = image;
	}





	public void setId(long id) {
		this.id = id;
	}
	public String getProductName() {
		return ProductName;
	}
	public void setProductName(String productName) {
		ProductName = productName;
	}
	public String getProductBrand() {
		return ProductBrand;
	}
	public void setProductBrand(String productBrand) {
		ProductBrand = productBrand;
	}
	public String getProductCategory() {
		return ProductCategory;
	}
	public void setProductCategory(String productCategory) {
		ProductCategory = productCategory;
	}
	public String getProductPrice() {
		return ProductPrice;
	}
	public void setProductPrice(String productPrice) {
		ProductPrice = productPrice;
	}
	public String getProductSize() {
		return ProductSize;
	}
	public void setProductSize(String productSize) {
		ProductSize = productSize;
	}
	public String getDiscription() {
		return Discription;
	}
	public void setDiscription(String discription) {
		Discription = discription;
	}


	
	
	
	

}
