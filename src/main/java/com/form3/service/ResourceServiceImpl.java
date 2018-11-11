package com.form3.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.form3.config.Config;
import com.form3.entity.Resource;
import com.form3.repository.ResourceRepository;
import com.form3.validation.AmountsValidator;
import com.form3.validation.BankValidator;
import com.form3.validation.CreateIdValidator;
import com.form3.validation.LookupTableValidator;
import com.form3.validation.NumericValidator;
import com.form3.validation.VersionValidator;

/**
 * Resource Service to abstract the service layer from the controller
 * @author jamie
 *
 */
@Service 
public class ResourceServiceImpl implements ResourceService{

	private final ResourceRepository resourceRepository;
	private final VersionValidator versionValidator;
	private final NumericValidator numericValidator;
	private final LookupTableValidator lookupTableValidator;
	private final BankValidator bankValidator;
	private final AmountsValidator amountsValidator;
	private final CreateIdValidator createIdValidator;
	
	public ResourceServiceImpl( @Autowired final ResourceRepository resourceRepository,
								@Autowired final VersionValidator versionValidator,
								@Autowired final NumericValidator numericValidator,
								@Autowired final LookupTableValidator lookupTableValidator,
								@Autowired final BankValidator bankValidator,
								@Autowired final AmountsValidator amountsValidator,
								@Autowired final CreateIdValidator createIdValidator
			) {
		this.resourceRepository = resourceRepository;
		this.versionValidator = versionValidator;
		this.numericValidator = numericValidator;
		this.lookupTableValidator = lookupTableValidator;
		this.bankValidator = bankValidator;
		this.amountsValidator = amountsValidator;
		this.createIdValidator = createIdValidator;
	}
	/**
	 * create mongo record
	 * @param resource we want to persist
	 * @return saved record
	 */
	@Override
	public Resource create(final Resource resource) {
		this.createIdValidator.validate("POST", resource, null);
		this.versionValidator.validate("POST", resource, null);
		this.numericValidator.validate("POST", resource, null);
		this.lookupTableValidator.validate("POST", resource, null);
		this.bankValidator.validate("POST", resource, null);
		this.amountsValidator.validate("POST", resource, null);
		return resourceRepository.save(resource);
	}

	/**
	 * delete record
	 * @param id of the record
	 */
	@Override
	public void delete(String id) {
		resourceRepository.deleteById(id);
	}

	/**
	 * gets all recs for this colletion
	 * @return a list of records 
	 */
	@Override
	public List<Resource> getAll() {
		return resourceRepository.findAll();
	}

	/**
	 * gets records by id
	 * @param the id of the record
	 * @return a resource selected by id
	 */
	@Override
	public Resource getById(String id) {
		return resourceRepository.findBy_Id(id).orElseGet(()->new Resource());
	}

	/**
	 * update a record by id
	 * @param id of the record
	 * @param resource values to update
	 */
	@Override
	public Resource update(String id, Resource resource) {
		resource.set_Id(id);
		Resource dbResourceOpt = resourceRepository.findBy_Id(id).orElseGet(()->new Resource());
		this.versionValidator.validate(Config.PUT, resource, dbResourceOpt);
		this.numericValidator.validate(Config.PUT, resource, dbResourceOpt);
		this.lookupTableValidator.validate(Config.PUT, resource, dbResourceOpt);
		this.bankValidator.validate(Config.PUT, resource, dbResourceOpt);
		this.amountsValidator.validate(Config.PUT, resource, dbResourceOpt);
		return resourceRepository.save(resource);
	}

}
