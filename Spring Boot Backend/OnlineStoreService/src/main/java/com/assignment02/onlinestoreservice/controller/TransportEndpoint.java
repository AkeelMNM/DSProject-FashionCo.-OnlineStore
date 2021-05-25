package com.assignment02.onlinestoreservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.assignment02.onlinestoreservice.api.TransportApi;
import com.assignment02.onlinestoreservice.domain.Transport;
import com.assignment02.onlinestoreservice.dto.TransportDto;

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

@CrossOrigin("*")
@RestController
@RequestMapping("/transport")
public class TransportEndpoint {

	private final TransportApi transportApi ;
	
	@Autowired
	public TransportEndpoint(TransportApi transportApi) {
		this.transportApi = transportApi;
	}
	
	// Add Transport details
	@PostMapping("/add")
	public ResponseEntity<String> saveTransport(@RequestBody TransportDto transportDto) {
		Transport transport = new Transport();
		
		transport.setUserID(transportDto.getUserID());
		transport.setName(transportDto.getName());
		transport.setAddress(transportDto.getAddress());
		transport.setCity(transportDto.getCity());
		transport.setPostelCode(transportDto.getPostelCode());
		transport.setMobileNumber(transportDto.getMobileNumber());
		
		transportApi.AddTransport(transport);
		
		return ResponseEntity.ok("Transport Added");
		
	}
	
	//get transport by UserId rest api
	@GetMapping("/getTransport/{id}")
	public List<Transport> getTransportById(@PathVariable String id) {
		return transportApi.getTransportDeatailsById(id);
	}

	
}
