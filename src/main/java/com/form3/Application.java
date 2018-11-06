package com.form3;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.convert.Jsr310Converters;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import springfox.documentation.swagger2.annotations.EnableSwagger2;


/**
 * Main class to bootstrap Spring Boot
 * @author jamie
 *
 */
@EnableMongoRepositories
@SpringBootApplication
@EnableSwagger2
@EntityScan(basePackageClasses = { Application.class, Jsr310Converters.class })
public class Application {

	/**
	 * Main method to start the application
	 * @param args- command line args
	 */
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
