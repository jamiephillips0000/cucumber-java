package com.form3.validation;

import com.form3.entity.Resource;

/**
 * interface for all validators
 * @author jamie
 *
 */
public interface Validator {
	/**
	 * validate a record
	 * @param httpMethod - one of POST, GET, PUT, DELETE
	 * @param resource - the new resource we wish to evaluate
	 * @param dbResource - the record persisted in Mongo
	 */
	public void validate(final String httpMethod, final Resource resource, final Resource dbResource);

}
