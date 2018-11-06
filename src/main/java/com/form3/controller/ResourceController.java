package com.form3.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.form3.config.Config;
import com.form3.entity.Resource;
import com.form3.service.ResourceService;

import io.swagger.annotations.ApiOperation;


/**
 * REST Controller for the ResourceService
 * @author jamie
 *
 */

@RestController
@RequestMapping(value=Config.API_PREFIX, produces=MediaType.APPLICATION_JSON_VALUE)
public class ResourceController {
	
	/**
	 * A Service for Mongo
	 */
	private ResourceService resourceService;
	/**
	 * Constructor taking compulsary args for this class
	 * @param resourceService - access to Mongo
	 */
	public ResourceController(@Autowired ResourceService resourceService) {
		this.resourceService = resourceService;
	}
	
	/**
	 * GET requests are handled here and return all Resources in the mongo DB 
	 * @return responseEntity which wraps a List<Resource> and a HTTP Status code
	 */
    @ApiOperation(value = "Get all resources", notes = "")
	@RequestMapping(method = { RequestMethod.GET }, value = { "/resource" }, produces = {MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<List<Resource>> get() {
		return new ResponseEntity<List<Resource>>(this.resourceService.getAll(), HttpStatus.OK);
	}

    /**
     * Handles GET requests using an ID and return all Resources in the mongo DB
     * @param id the mongo DB ID of the record requested
     * @return responseEntity which wraps a Resource and a HTTP Status code
     */
    @ApiOperation(value = "Get resource by ID", notes = "")
	@RequestMapping(method = { RequestMethod.GET }, value = { "/resource/{id}" }, produces = {MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<?> getById(@PathVariable String id) {
    	Resource resource = this.resourceService.getById(id);
    	if(resource.get_Id() == null) {
    		return new ResponseEntity<String>("{}", HttpStatus.NOT_FOUND);    		
    	}else {
    		return new ResponseEntity<Resource>(resource, HttpStatus.OK);
    	}

	}

    /**
     * Create Requests 
     * @param resource - the resource to save
     * @return the created resource with populated e.g. ID field
     */
    @ApiOperation(value = "Create a new resource", notes = "")
	@RequestMapping(method = { RequestMethod.POST }, value = { "/resource" }, produces = {MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<Resource> create(@Valid @RequestBody Resource resource) {
		return new ResponseEntity<Resource>(this.resourceService.create(resource),HttpStatus.CREATED);
	}
	
    /**
     * PUT Requests to update mongo records
     * @param id the ID of the record in the mongo db
     * @param resource the record that needs to be updated
     * @return the updated resource with populated e.g. ID field
     */
    @ApiOperation(value = "Update resource by ID", notes = "")
	@RequestMapping(method = { RequestMethod.PUT }, value = { "/resource/{id}" }, produces = {MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<Resource> update(
			@PathVariable String id,
			@Valid @RequestBody Resource resource) {
		return new ResponseEntity<Resource>(this.resourceService.update(id, resource),HttpStatus.CREATED);
	}
    /**
     * DELETE to remove records from the Mongo DB
     * @param id the ID of the record in the mongo db
     * @return success status and HttpStatius code
     */
    @ApiOperation(value = "Delete resource by ID", notes = "")
	@RequestMapping(method = { RequestMethod.DELETE }, value = { "/resource/{id}" })
	public ResponseEntity<?> delete(@PathVariable String id) {
    	this.resourceService.delete(id);
		return new ResponseEntity<String>("{'status' : 'deleted successfully'}", HttpStatus.OK);
	}

}

