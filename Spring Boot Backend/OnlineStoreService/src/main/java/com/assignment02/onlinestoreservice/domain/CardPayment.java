package com.assignment02.onlinestoreservice.domain;

public class CardPayment {

	private String userId;
	private String ownerName;
	private String CardNo;
	private String expDate;
	
	public CardPayment() {
		super();
	}
	
	public CardPayment(String userId, String ownerName, String cardNo, String expDate) {
		super();
		this.userId = userId;
		this.ownerName = ownerName;
		CardNo = cardNo;
		this.expDate = expDate;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getOwnerName() {
		return ownerName;
	}
	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
	}
	public String getCardNo() {
		return CardNo;
	}
	public void setCardNo(String cardNo) {
		CardNo = cardNo;
	}
	public String getExpDate() {
		return expDate;
	}
	public void setExpDate(String expDate) {
		this.expDate = expDate;
	}
	
	
	
}
