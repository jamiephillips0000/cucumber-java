package com.form3.error;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.ToString;
/**
 * simple obkject to hold errors
 * @author jamie
 *
 */

@AllArgsConstructor @ToString
public class ErrorDetails {
	/**
	 * timestamp of the error
	 */
	private Date timestamp;
	/**
	 * textual message of the error
	 */
	private String message;


}
