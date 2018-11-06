package com.form3.error;

import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import lombok.extern.slf4j.Slf4j;
/**
 * Controller Advice for Spring Boot
 * @author jamie
 *
 */
@ControllerAdvice
@RestControllerAdvice
@Slf4j
public class AppExceptionHandler  {

	/**
	 * handle errors
	 * @param ex the exception
	 * @return a ResponseBody wrapper with a status code and a resource
	 */
	@ExceptionHandler(Exception.class)
	public final ResponseEntity<ErrorDetails> handleUserNotFoundException(Exception ex) {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage());
		log.error(errorDetails.toString());
		return new ResponseEntity<ErrorDetails>(errorDetails, HttpStatus.INTERNAL_SERVER_ERROR);
	}

}
