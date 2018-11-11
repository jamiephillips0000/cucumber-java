package com.form3.validation;

import org.springframework.stereotype.Service;

import com.form3.config.Config;
import com.form3.entity.Resource;

/**
 * Validates the ID number is not present on a create
 * @author jamie
 *
 */
@Service
public class CreateIdValidator implements Validator{

	/**
	 * validate a record
	 * @param httpMethod - one of POST, GET, PUT, DELETE
	 * @param resource - the new resource we wish to evaluate
	 * @param dbResource - the record persisted in Mongo
	 */
	@Override
	public void validate(final String httpMethod, final Resource resource, final Resource dbResource) {
		
		if (Config.POST.equals(httpMethod)) {
			if(resource.get_Id() != null) {
				throw new RuntimeException("Resource Validation Error : Id cannot be present in a POST/Create'" + resource.get_Id()+ "'");
			}
		}
	}

}
