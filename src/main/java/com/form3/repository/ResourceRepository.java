package com.form3.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.form3.entity.Resource;
/**
 * Interface for Spring Boot to Mongo DB
 * @author jamie
 *
 */
public interface ResourceRepository extends MongoRepository<Resource, String> {

	/**
	 * finds records by ID
	 * @param id - ID we wish to find
	 * @return a resource we found or an empty one if not
	 */
	public Optional<Resource> findBy_Id(String id);

	/**
	 * Finds all resources in the collection in Mongo
	 * @return a list of Resources
	 */
	public List<Resource> findAll();	
	
	/**
	 * Saves a resource in the mngo database
	 * @param resource - the resource we want to save
	 */
	public Resource save(Resource resource);	

	
	/**
	 * delete a record 
	 * @param id - the id we wish to delete
	 */
	public void deleteById(String id);
	
	
	/**
	 * delete all records in a collection
	 * @param id - the id we wish to delete
	 */
	@Override
	public void deleteAll();
	
	
}
