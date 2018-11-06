package com.form3.service;

import java.util.List;


import com.form3.entity.Resource;


public interface ResourceService {

    Resource create(Resource resource);
    void delete(String id);
    List<Resource> getAll();
    Resource getById(String id);
    Resource update(String id, Resource resource);
	
	
	
}
