package com.assignment02.onlinestoreservice.api;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assignment02.onlinestoreservice.domain.Account;
import com.assignment02.onlinestoreservice.repository.UsersRepository;

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */


@Service
public class UsersApi {

	@Autowired
	private UsersRepository usersRepository;
	
	
	/**
	 * Create User Service
	 */
	public Account createAccount(Account account) {	
		account.setId(UUID.randomUUID().toString());
		String newPassord = encryptPassword(account.getPassword());
		
		if(newPassord.equals(null)) {
			return null;
		}
		
		account.setPassword(newPassord);
		return usersRepository.save(account);
	}
	
	/**
	 * Check User Login Service
	 */
	public Account LoginUser(Account account) {
		String password = encryptPassword(account.getPassword());
		Account userAccount = null;
		userAccount = usersRepository.findByNameAndPassword(account.getEmail(),password);
		
		if(userAccount == null) {
			return null;
		}
		else if(userAccount.getPassword().equals(password) && userAccount.getEmail().equals(account.getEmail())) {
			return userAccount;
		}
		
		return null;
	}
	
	/**
	 * Update User Account Service
	 */
	public String updateAccount(String id, Account upAccount) {
		Optional<Account> Acc = usersRepository.findById(id);
		Account existAcc = Acc.get();
		String result = null;
		
		if(!existAcc.getEmail().equals(upAccount.getEmail()) && !upAccount.getEmail().equals("")) {
			existAcc.setEmail(upAccount.getEmail());
			result = "Email Change Successfully.";
		}
		
		if(!existAcc.getUsername().equals(upAccount.getUsername()) && !upAccount.getUsername().equals("")) {
			existAcc.setUsername(upAccount.getUsername());
			result = "Username Change Successfully.";
		}
		
		if(!upAccount.getPassword().equals("")) {
			String newPassord = encryptPassword(upAccount.getPassword());
			if(!newPassord.equals(existAcc.getPassword())) {
				existAcc.setPassword(newPassord);
				result = "Password Change Successfully.";
			}else {
				result = "Enter a New Password.";
			}
		}
		
		usersRepository.save(existAcc);
		return result;
	}
	
	/**
	 * Get User Account Details Service
	 */
	public Account getUserById(String id) {
		Optional<Account> Acc = usersRepository.findById(id);
		Account account = Acc.get();
		return account;
	}
	
	/**
	 * Encrypting the User Password using SHA-1 encryption algorithm
	 */
	private String encryptPassword(String password) {
		
		MessageDigest messageDigest;
		try {
			messageDigest = MessageDigest.getInstance("SHA-1");
			
			byte[] passwordDigest = messageDigest.digest(password.getBytes());
			
			BigInteger number = new BigInteger(1,passwordDigest);
			
			String hashedPassword = number.toString(16);
			
			while(hashedPassword.length() < 32) {
				hashedPassword = "0" + hashedPassword;
			}
			
			return hashedPassword;
			
		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return null;
	}
}
