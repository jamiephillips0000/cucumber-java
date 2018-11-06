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
				throw new RuntimeException("version  must be equal '0' for a create/POST request and not '" + resource.getVersion()+ "'");
			}
		}else if (Config.PUT.equals(httpMethod)) {
			if(Integer.parseInt(resource.getVersion()) != Integer.parseInt(dbResource.getVersion()+1)) {
				throw new RuntimeException("Version mismatch - The version of the Resource you have read locally has changed on the server- refresh your local instance and try again. Supplied 'version' " + resource.getVersion() + " database 'version' " + dbResource.getVersion());
			}
		}
	}

}
