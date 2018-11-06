package com.form3.swagger;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * For generating swagger doc
 * @author jamie
 *
 */
@Configuration
@EnableSwagger2
@Import({ 
//	springfox.documentation.spring.data.rest.configuration.SpringDataRestConfiguration.class, 
	springfox.bean.validators.configuration.BeanValidatorPluginsConfiguration.class})
public class SwaggerConfig {

	/**
	 * Docket needed for Swagger config
	 * @return
	 */
  @Bean
  public Docket api() {
      return new Docket(DocumentationType.SWAGGER_2)
              .select()
              .apis(RequestHandlerSelectors.any())
              .paths(PathSelectors.any())
              .build();
  }
}
