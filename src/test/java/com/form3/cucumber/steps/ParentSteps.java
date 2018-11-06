package com.form3.cucumber.steps;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.form3.repository.ResourceRepository;

@WebAppConfiguration
@EnableWebMvc
//@Transactional
public abstract class ParentSteps {

    @Autowired
    WebApplicationContext context;

    @Autowired ResourceRepository resourceRepository;
    

}
