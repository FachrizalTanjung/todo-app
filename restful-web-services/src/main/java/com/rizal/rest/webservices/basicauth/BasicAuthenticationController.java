package com.rizal.rest.webservices.basicauth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BasicAuthenticationController {

	@GetMapping("/basicauth")
	public BasicAuthenticationBean basicAuthentication() {
		return new BasicAuthenticationBean("You are authenticated");
	}

}
