package com.assignment02.onlinestoreservice.controller;

import java.text.ParseException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.assignment02.onlinestoreservice.api.PaymentApi;
import com.assignment02.onlinestoreservice.domain.CardPayment;
import com.assignment02.onlinestoreservice.domain.MobilePayment;
import com.assignment02.onlinestoreservice.dto.CardPaymentDto;
import com.assignment02.onlinestoreservice.dto.MobliePaymentDto;

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

@CrossOrigin("*")
@RestController
@RequestMapping("/payments")
public class PaymentEndPoint {

	private final PaymentApi paymentApi;
	
	@Autowired
	public PaymentEndPoint(PaymentApi paymentApi) {
		this.paymentApi = paymentApi;
	}
	
	
	/**
	 * EndPoint to Make Card Payments
	 */
	@PostMapping("/cardPayment")
	public ResponseEntity<String> cardPaymet(@RequestBody CardPaymentDto cardPaymentDto) throws ParseException{
		CardPayment cardPayment = new CardPayment();
		cardPayment.setUserId(cardPaymentDto.getUserId());
		cardPayment.setCardNo(cardPaymentDto.getCardNo());
		cardPayment.setExpDate(cardPaymentDto.getExpDate());
		
		String result = paymentApi.makeCardPayment(cardPayment, cardPayment.getUserId());
		return ResponseEntity.ok(result);
		
	}
	
	/**
	 * EndPoint to Make Card Payments
	 */
	@PostMapping("/mobilePayment")
	public ResponseEntity<String> mobilePayment(@RequestBody MobliePaymentDto mobilePaymentDto) throws ParseException{
		MobilePayment mobilePayment = new MobilePayment();
		mobilePayment.setUserId(mobilePaymentDto.getUserId());
		mobilePayment.setMobileNo(mobilePaymentDto.getMobileNo());
		mobilePayment.setOwnerName(mobilePaymentDto.getOwnerName());
		mobilePayment.setMobileCompany(mobilePaymentDto.getMobileCompany());
		
		String result = paymentApi.makeMobilePayment(mobilePayment, mobilePayment.getUserId());
		return ResponseEntity.ok(result);
		
	}
	
}
