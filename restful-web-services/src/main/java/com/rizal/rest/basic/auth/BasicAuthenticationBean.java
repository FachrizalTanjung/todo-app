package com.rizal.rest.basic.auth;

public class BasicAuthenticationBean {

	private String message;

	public BasicAuthenticationBean(String message) {
		super();
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
