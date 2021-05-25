package com.assignment02.onlinestoreservice.dto;

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

public class TransportDto {

	private String userID;
	private String name;
	private String address;
	private String city;
	private String postelCode;
	private String mobileNumber;

	public TransportDto(String userID, String name, String address, String city, String postelCode,
			String mobileNumber) {
		super();
		this.userID = userID;
		this.name = name;
		this.address = address;
		this.city = city;
		this.postelCode = postelCode;
		this.mobileNumber = mobileNumber;
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPostelCode() {
		return postelCode;
	}

	public void setPostelCode(String postelCode) {
		this.postelCode = postelCode;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	
	
}
