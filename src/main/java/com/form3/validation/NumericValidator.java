package com.form3.validation;

import org.springframework.stereotype.Service;

import com.form3.entity.Resource;

/**
 * Used to validate a numeric attribute
 * @author jamie
 *
 */
@Service
public class NumericValidator implements Validator{

	
	/**
	 * validate a record
	 * @param httpMethod - one of POST, GET, PUT, DELETE
	 * @param resource - the new resource we wish to evaluate
	 * @param dbResource - the record persisted in Mongo
	 */
	@Override
	public void validate(final String httpMethod, final Resource resource, final Resource dbResource) {
		if (!resource.getAttributes().getNumericReference().matches("[0-9]+")) {
			throw new RuntimeException("$.attributes.numeric_reference must be a number and not '" + resource.getAttributes().getNumericReference()+"'");
		}
	}
}
