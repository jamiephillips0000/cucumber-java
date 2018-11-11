package com.form3.validation;

import org.springframework.stereotype.Service;

import com.form3.config.Config;
import com.form3.entity.Resource;

/**
 * Validates the version number of a resource
 * @author jamie
 *
 */
@Service
public class VersionValidator implements Validator{

	/**
	 * validate a record
	 * @param httpMethod - one of POST, GET, PUT, DELETE
	 * @param resource - the new resource we wish to evaluate
	 * @param dbResource - the record persisted in Mongo
	 */
	@Override
	public void validate(final String httpMethod, final Resource resource, final Resource dbResource) {
		
		if (Config.POST.equals(httpMethod)) {
			if(!"0".equals(resource.getVersion())) {
				throw new RuntimeException("Resource Validation Error : version  must be equal '0' for a create/POST request and not '" + resource.getVersion()+ "'");
			}
		}
	}

}
