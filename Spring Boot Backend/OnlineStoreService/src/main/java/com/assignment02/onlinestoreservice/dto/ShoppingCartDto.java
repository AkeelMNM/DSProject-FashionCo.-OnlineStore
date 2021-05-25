package com.assignment02.onlinestoreservice.dto;

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

public class ShoppingCartDto {
	
	private long id;
	private String userID;
	private long productId;
	private String name;
	private String price;
	private String size;
	private long qty;
	private byte[] image;
	
	
	public ShoppingCartDto() {
		super();
	}
	
	public ShoppingCartDto(long id, String userID, long productId, String name, String price, String size, long qty,
			byte[] image) {
		super();
		this.id = id;
		this.userID = userID;
		this.productId = productId;
		this.name = name;
		this.price = price;
		this.size = size;
		this.qty = qty;
		this.image = image;
	}

	public long getProductId() {
		return productId;
	}

	public void setProductId(long productId) {
		this.productId = productId;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUserID() {
		return userID;
	}

	public void setUserID(String userID) {
		this.userID = userID;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}

	public long getQty() {
		return qty;
	}

	public void setQty(long qty) {
		this.qty = qty;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	
}
