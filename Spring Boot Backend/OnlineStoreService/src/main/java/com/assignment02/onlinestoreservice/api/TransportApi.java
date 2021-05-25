package com.assignment02.onlinestoreservice.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assignment02.onlinestoreservice.domain.Transport;
import com.assignment02.onlinestoreservice.repository.TransportRepository;

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

@Service
public class TransportApi {

	@Autowired
	private TransportRepository transportRepository;
	
	public Transport AddTransport(Transport transport) {
		return transportRepository.save(transport);
	}
	
	public List<Transport> getTransportDeatailsById(String userId) {
		return transportRepository.getTransportIds(userId);
	}
	
}
