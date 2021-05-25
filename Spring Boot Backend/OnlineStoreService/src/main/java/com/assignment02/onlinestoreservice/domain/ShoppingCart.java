package com.assignment02.onlinestoreservice.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

@Entity
@Table(name = "shopping_cart")
public class ShoppingCart {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "userID")
	private String userID;
	
	@Column(name = "productId")
	private long productId;
	
	@Column(name = "qty")
	private long Qty;

	public ShoppingCart(long id, String userID, long productId, long qty) {
		super();
		this.id = id;
		this.userID = userID;
		this.productId = productId;
		Qty = qty;
	}

	public ShoppingCart() {
		super();
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

	public long getProductId() {
		return productId;
	}

	public void setProductId(long productId) {
		this.productId = productId;
	}

	public long getQty() {
		return Qty;
	}

	public void setQty(long qty) {
		Qty = qty;
	}

	
}
