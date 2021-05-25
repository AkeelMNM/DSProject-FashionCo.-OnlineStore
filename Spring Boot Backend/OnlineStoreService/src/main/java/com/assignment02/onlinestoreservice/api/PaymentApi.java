package com.assignment02.onlinestoreservice.api;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assignment02.onlinestoreservice.domain.Account;
import com.assignment02.onlinestoreservice.domain.CardPayment;
import com.assignment02.onlinestoreservice.domain.MobilePayment;
import com.assignment02.onlinestoreservice.repository.UsersRepository;

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

@Service
public class PaymentApi {

	@Autowired
	private UsersRepository usersRepository;
	
	/**
	 * Card Payment Service
	 */
	public String makeCardPayment(CardPayment cardPayment,String Id) throws ParseException {
		
		Optional<Account> optAccount = usersRepository.findById(Id);
		
		if(optAccount.isPresent() == false) {
			return "Unable to validate user";
		}
		
		if(!((cardPayment.getCardNo().length()) == 16)) {
			return "Card number not valid";
		}
		
		SimpleDateFormat dateFormat = new SimpleDateFormat("MM/yy");
		dateFormat.setLenient(false);
		Date expiry = dateFormat.parse(cardPayment.getExpDate());
		boolean expired = expiry.before(new Date());
		
		if(expired == true) {
			return "Card is Expired";
		}
		
		return "Payment Succeed";
	}
	
	/**
	 * Mobile Payment Service
	 */
	public String makeMobilePayment(MobilePayment mobilePayment,String Id) throws ParseException {
		
		Optional<Account> optAccount = usersRepository.findById(Id);
		
		if(optAccount.isPresent() == false) {
			return "Unable to validate user";
		}
		
		if(!((mobilePayment.getMobileNo().length()) == 10)) {
			return "Phone number not 10 digits";
		}else if(!(mobilePayment.getMobileNo().matches("^(?=(?:[0-9]){1})(?=[0-9]{10}).*"))) {
			return "Invalid phone number";
		}
		
		String mobileVendor = mobilePayment.getMobileCompany();
		String[] vendors = {"dialog","mobitel","slt","airtel","hutch"};
		boolean exist = false;
		
		for (int i = 0; i < vendors.length; i++) {
			if(vendors[i].equals(mobileVendor)){
				exist = true;
			}
		}
		
		if(exist == false) {
			return "Select a vaild mobile company";
		}
		
		
		return "Payment added to your mobile bill";
	}
}
