package com.assignment02.onlinestoreservice.dto;

public class MobliePaymentDto {

	private String userId;
	private String ownerName;
	private String mobileNo;
	private String mobileCompany;
	private String payDate;
	
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
	public String getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}
	public String getMobileCompany() {
		return mobileCompany;
	}
	public void setMobileCompany(String mobileCompany) {
		this.mobileCompany = mobileCompany;
	}
	public String getPayDate() {
		return payDate;
	}
	public void setPayDate(String payDate) {
		this.payDate = payDate;
	}
	
}
