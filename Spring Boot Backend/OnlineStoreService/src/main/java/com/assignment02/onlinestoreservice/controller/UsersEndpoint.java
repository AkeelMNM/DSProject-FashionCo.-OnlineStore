package com.assignment02.onlinestoreservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.assignment02.onlinestoreservice.api.UsersApi;
import com.assignment02.onlinestoreservice.domain.Account;
import com.assignment02.onlinestoreservice.dto.AccountDto;

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

@CrossOrigin("*")
@RestController
@RequestMapping("/users")
public class UsersEndpoint {
	
	private final UsersApi usersApi;
	
	@Autowired
	public UsersEndpoint(UsersApi usersApi) {
		this.usersApi = usersApi;
	}
	
	
	/**
	 * EndPoint to create User Account
	 */
	@PostMapping("/register")
	public ResponseEntity<String> signIn(@RequestBody AccountDto accountDto) {
		Account account = new Account();
		account.setUsername(accountDto.getUsername());
		account.setEmail(accountDto.getEmail());
		account.setType(accountDto.getType());
		account.setPassword(accountDto.getPassword());
		Account newAccount = usersApi.createAccount(account);
		
		if(newAccount == null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Account Not Created");
		}
		
		return ResponseEntity.ok("Account Created");
	}
	
	/**
	 * EndPoint to Check User Login
	 */
	@PostMapping("/login")
	public ResponseEntity<String> signUp(@RequestBody AccountDto accountDto){
		Account account = new Account();
		account.setEmail(accountDto.getEmail());
		account.setPassword(accountDto.getPassword());
		
		Account resposeAcc = usersApi.LoginUser(account);
		
		if(resposeAcc == null ) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login Failed");
		}
		if(!resposeAcc.equals(null)) {
			return ResponseEntity.ok(resposeAcc.getId()+"~"+resposeAcc.getType());
		}
		
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("ERROR");
		
	}
	
	/**
	 * EndPoint to update User Account
	 */
	@PutMapping("/update/{id}")
	public ResponseEntity<String> updateUser(@PathVariable String id, @RequestBody AccountDto accountDto) {
		Account account = new Account();
		account.setUsername(accountDto.getUsername());
		account.setEmail(accountDto.getEmail());
		account.setType(accountDto.getType());
		account.setPassword(accountDto.getPassword());
		
		String message  = usersApi.updateAccount(id,account);
		
		return ResponseEntity.status(HttpStatus.OK).body(message);
	}
	
	/**
	 * EndPoint to Get User Account Details
	 */
	@GetMapping("/getUser/{id}")
	public Account getUser(@PathVariable String id) {
		
		Account account = usersApi.getUserById(id);
		account.setId("");
		account.setPassword("");
		
		return account;
	}
	

}
